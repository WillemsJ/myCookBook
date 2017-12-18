import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Dish } from "../dish";
import { DishService } from "../service/dish.service";
import {CategoryService} from "../service/chosencategory.service";
import {Subscription} from "rxjs/Subscription";
import {EventBusService} from "../service/event-bus.service";
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase";

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})

export class DishDetailComponent implements OnInit {

  @Input() dishName: string;

  dishesObservable: Observable<any[]>;
  user: Observable<firebase.User>;
  userPromise: Promise<firebase.User>;
  category: any;
  subscription: Subscription;
  receipes: string[];
  currentRecipe: Dish;

  private currentDish;

  setDish(dish) {
    if (this.currentDish === dish) return;
    this.currentDish = dish;
  }

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private categoryService: CategoryService,
    private event: EventBusService,
    private location: Location,
    public afAuth: AngularFireAuth) {
    this.subscription = this.categoryService.getCategory().subscribe(category => this.category = category);
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(auth => {
      if (auth && auth.uid) {
        this.user = this.afAuth.authState;
      }
      if (!(auth && auth.uid)) {
        this.dishesObservable = null;
        this.user = null;
        this.userPromise = null;
      }

    });

    this.getDish();
  }

  goBack(): void {
    this.location.back();
  }

  getDish(): void {
    this.categoryService.getCategory()
      .subscribe(dish => this.dish = dish);
  }
}

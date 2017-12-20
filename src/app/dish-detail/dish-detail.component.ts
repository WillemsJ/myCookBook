import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Dish } from "../dish";
import {CategoryService} from "../service/chosencategory.service";
import {Subscription} from "rxjs/Subscription";
import {EventBusService} from "../service/event-bus.service";
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {forEach} from "@angular/router/src/utils/collection";
import {FirebaseListObservable} from "angularfire2/database-deprecated";

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})

export class DishDetailComponent implements OnInit {

  @Input() dishType: string;

  dishesObservable: Observable<any[]>;
  user: Observable<firebase.User>;
  userPromise: Promise<firebase.User>;
  category: any;
  subscription: Subscription;
  currentRecipe: Dish;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private categoryService: CategoryService,
    private event: EventBusService,
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

  }

  getDish($event): void {
    this.currentRecipe = $event;
  }
}

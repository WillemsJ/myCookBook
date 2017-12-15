import { Component, Input, OnInit } from '@angular/core';
import {DishNavComponent} from "../dish-nav/dish-nav.component";
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase";
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import { CategoryService} from '../service/chosencategory.service';
import { Subscription } from 'rxjs/Subscription';
import { EventBusService } from '../service/event-bus.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dishesObservable: Observable<any[]>;
  user: Observable<firebase.User>;
  userPromise: Promise<firebase.User>;
  foodKeys: string[];
  food: string[];
  dishNavComp = DishNavComponent.getDishNavMethods();

  category: any;
  subscription: Subscription;



  constructor(private categoryService: CategoryService, private db: AngularFireDatabase,
              public afAuth: AngularFireAuth, private event: EventBusService) {
    this.subscription = this.categoryService.getCategory().subscribe(category => {
      this.category = category;
      console.log(category);
    });
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(auth => {
      if (auth && auth.uid) {
        this.user = this.afAuth.authState;

        this.processData();
      }
      if (!(auth && auth.uid)) {
        this.dishesObservable = null;
        this.user = null;
        this.userPromise = null;
      }

    });
  }

  private processData(): void {
    this.event.observe('changedCategory').subscribe((value) => {
      console.log(value.listPath);
      this.db.object(value.listPath).valueChanges().subscribe(values => {
        console.log(values);
        this.food = Object.keys(values);
        console.log(Object.keys(values));
      });
    });
  }


}

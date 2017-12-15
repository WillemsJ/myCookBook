import { Component, Input, OnInit } from '@angular/core';
import {DishService} from "../service/dish.service";
import {DishNavComponent} from "../dish-nav/dish-nav.component";
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase";
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dishesObservable: Observable<any[]>;
  user: Observable<firebase.User>;
  userPromise: Promise<firebase.User>;
  // dishesKeys: string[];
  dishesKeys: string[] = this.dishService.getDishesKeys();

  dishNavComp = DishNavComponent.getDishNavMethods();
  @Input() public getCategory: string;

  constructor(private dishService: DishService, private db: AngularFireDatabase, public afAuth: AngularFireAuth) {
  }

  ngOnInit() {
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

  getDishes(listPath): Observable<any> {
      return this.db.object(listPath).valueChanges();
  }

  getDrinks(listPath): Observable<any> {
      return this.db.object(listPath).valueChanges();
  }

  getUnits(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  chooseDish() {
    this.getDishes('/Dishes').subscribe((dishes) => {
      console.log(dishes);
      this.dishesKeys = Object.keys(dishes);
    });
  }

  chooseDrinks() {
    this.getDrinks('/Drinks').subscribe(drinks => {
      console.log(drinks);
      this.dishesKeys = Object.keys(drinks);
    });
  }

  chooseUnits() {
    this.getUnits('/Units').subscribe(units => {
      console.log(units);
      this.dishesKeys = units;
    });
  }
}

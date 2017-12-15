import { Component, OnInit } from '@angular/core';

import {Dish} from "../dish";
import {DishService} from "../service/dish.service";
import {Observable} from "rxjs/Observable";
import {FormControl, FormGroup} from "@angular/forms";
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {AppComponent} from "../app.component";
import {Subject} from "rxjs/Subject";


@Component({
  selector: 'app-dish-nav',
  templateUrl: './dish-nav.component.html',
  styleUrls: ['./dish-nav.component.scss']
})
export class DishNavComponent implements OnInit {
  protected static dishNavComp: DishNavComponent;

  appComp = AppComponent.getInstance();

  dishes: Dish[] = [];
  dishesObservable: Observable<any[]>;
  userPromise: Promise<firebase.User>;
  user: Observable<firebase.User>;
  // dishesKeys: string[];
  typeOfDishes$: Observable<Dish[]>;
  private searchTerms = new Subject<string>();

  signInForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });


  constructor(private dishService: DishService, private db: AngularFireDatabase, public afAuth: AngularFireAuth) { }

  static getDishNavMethods(): DishNavComponent {
    return this.dishNavComp;
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

  loginEmail() {
    this.userPromise = this.afAuth.auth.signInWithEmailAndPassword('jwillems04@gmail.com', 'seth1704Apr9l');
    console.log(this.userPromise);
  }
  loginAnonymous() {
    this.userPromise = this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.db.database.goOffline();
    this.userPromise = this.afAuth.auth.signOut();
  }

  // getDishes(listPath): Observable<any> {
  //   return this.db.object(listPath).valueChanges();
  // }
  //
  // getDrinks(listPath): Observable<any> {
  //   return this.db.object(listPath).valueChanges();
  // }
  //
  // getUnits(listPath): Observable<any[]> {
  //   return this.db.list(listPath).valueChanges();
  // }
  //
  // chooseDish() {
  //   this.getDishes('/Dishes').subscribe((dishes) => {
  //     console.log(dishes);
  //     this.dishesKeys = Object.keys(dishes);
  //   });
  // }
  // chooseDrinks() {
  //   this.getDrinks('/Drinks').subscribe(drinks => {
  //     console.log(drinks);
  //     this.dishesKeys = Object.keys(drinks);
  //   });
  // }
  //
  // chooseUnits() {
  //   this.getUnits('/Units').subscribe(units => {
  //     console.log(units);
  //     this.dishesKeys = units;
  //   });
  // }

  getDishes() {
    this.dishService.chooseDish();
  }

  getDrinks() {
    this.dishService.chooseDrinks();
  }

  // getUnits() {
  //   this.dishService.chooseUnits();
  // }
  //
  // search(term: string): void {
  //   this.searchTerms.next(term);
  // }

}

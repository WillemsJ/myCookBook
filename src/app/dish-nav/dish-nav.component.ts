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
  public selectedCategory = '';

  dishesObservable: Observable<any[]>;
  userPromise: Promise<firebase.User>;
  user: Observable<firebase.User>;

  private searchTerms = new Subject<string>();
  email = 'email';
  password = 'password';


  constructor(private dishService: DishService, private db: AngularFireDatabase, public afAuth: AngularFireAuth) {
  }

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

  changeEmail(ev) {
    this.email = ev.target.value;
  }

  currentPassword(ev) {
    this.password = ev.target.value;
  }

  loginEmail() {
    this.userPromise = this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
    console.log(this.userPromise);
  }

  loginAnonymous() {
    this.userPromise = this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.db.database.goOffline();
    this.userPromise = this.afAuth.auth.signOut();
  }

  selectCategoryHandler(ev: any) {
    this.selectedCategory = ev.target.value;
  }

}

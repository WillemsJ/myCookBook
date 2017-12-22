import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {AppComponent} from "../app.component";
import {Subject} from "rxjs/Subject";
import { CategoryService } from '../service/chosencategory.service';
import { DashboardComponent} from '../dashboard/dashboard.component';
import { EventBusService } from '../service/event-bus.service';


@Component({
  selector: 'app-dish-nav',
  templateUrl: './dish-nav.component.html',
  styleUrls: ['./dish-nav.component.scss']
})
export class DishNavComponent implements OnInit {
  protected static dishNavComp: DishNavComponent;

  ss;

  appComp = AppComponent.getInstance();
  public selectedCategory = '';

  dishesObservable: Observable<any[]>;
  userPromise: Promise<firebase.User>;
  user: Observable<firebase.User>;
  method: DashboardComponent;

  private searchTerms = new Subject<string>();
  email = 'email';
  password = 'password';
  constructor(private categoryService: CategoryService, private db: AngularFireDatabase,
              public afAuth: AngularFireAuth, private event: EventBusService) {
    this.ss = event;
  }

  static getDishNavMethods(): DishNavComponent {
    return this.dishNavComp;
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(auth => {
      if (auth && auth.uid) {
        this.user = this.afAuth.authState;
        this.ss = event;
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

  // selectCategoryHandler(ev: any) {
  //   this.selectedCategory = ev.target.value;
  // }
  sendDishesCategory(category: string) {
    this.event.emit('changedCategory', { listPath: '/Dishes' });
  }
  sendDrinksCategory(category: string) {
    this.event.emit('changedCategory', { listPath: '/Drinks' });
  }

  hideContentView() {
    this.event.hide();
  }
}

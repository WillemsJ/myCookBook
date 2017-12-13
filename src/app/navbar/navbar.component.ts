import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dishesObservable: Observable<any[]>;
  userPromise: Promise<firebase.User>;
  user: Observable<firebase.User>;
  dishesKeys: string[];

  signInForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth) {}

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

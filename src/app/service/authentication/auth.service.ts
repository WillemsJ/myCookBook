import { Injectable, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService implements OnInit {

  user: Observable<firebase.User>;


  constructor(public afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
  }

  loginEmail() {
    return this.afAuth.auth.signInWithEmailAndPassword('jwillems04@gmail.com', 'seth1704Apr9l');
    // const emailValue = document.getElementById('emailID');
    // console.log(emailValue);
  }
  loginAnonymous() {
    this.afAuth.auth.signInAnonymously();
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}

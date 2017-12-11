import { Component} from '@angular/core';
import { AuthService} from '../service/authentication/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user: Observable<firebase.User>;

  constructor(private authService: AuthService) {
  }

  authServiceLoginEmail() {
    this.authService.loginEmail().then((loggedInUserData) => {
      console.log(loggedInUserData.email);
    });
  }

  authserviceLogout() {
    this.authService.logout();
  }
}

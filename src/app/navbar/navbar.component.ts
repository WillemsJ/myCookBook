import { Component, OnInit } from '@angular/core';
import { AuthService} from '../service/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  auth: AuthService;

  constructor() { }
}

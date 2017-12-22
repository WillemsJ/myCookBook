import { Component, Input, OnInit } from '@angular/core';
import { EventBusService } from './service/event-bus.service';
import { DishNavComponent} from './dish-nav/dish-nav.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  dishType: string;
  viewList: Boolean;

  static appcomp: AppComponent;

  title = 'My Cookbook';

  constructor(ss: EventBusService) {
    this.viewList = false;
    this.ss = ss;
  }

  ngOnInit() {
  }
  static getInstance(): AppComponent {
    if (!this.appcomp) {
      this.appcomp = new AppComponent();
    }
    return this.appcomp;
  }

  dishEvent(dishType) {
    this.dishType = dishType;
  }




}

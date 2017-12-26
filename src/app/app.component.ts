import { Component, Input, OnInit } from '@angular/core';
import { EventBusService } from './service/event-bus.service';
import { DishNavComponent} from './dish-nav/dish-nav.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  static appcomp: AppComponent;
  dishType: string;
  title = 'My Cookbook';

  constructor(private viewList: EventBusService) {
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

  show() {
    this.viewList.show();
  }

}

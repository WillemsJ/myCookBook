import { Component, OnInit } from '@angular/core';

import {Dish} from "../dish";
import {DishService} from "../dish.service";

@Component({
  selector: 'app-dish-nav',
  templateUrl: './dish-nav.component.html',
  styleUrls: ['./dish-nav.component.scss']
})
export class DishNavComponent implements OnInit {

  dishes: Dish[] = [];

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.getDishes()
  }

  getDishes(): void {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes.slice(0, dishes.length));
  }

}

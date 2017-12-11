import { Component, OnInit } from '@angular/core';

import { Dish } from  '../dish';
import { DishService } from "../dish.service";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

  dishes: Dish[];

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.getDishes();
  }

  getDishes(): void {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this.dishService.addDish({name} as Dish)
      .subscribe(dish => {
        this.dishes.push(dish);
      });
  }

  delete(dish: Dish): void {
    this.dishes = this.dishes.filter(d => d !== dish);
    this.dishService.deleteDish(dish).subscribe();
  }

}

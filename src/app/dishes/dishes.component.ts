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
  typesOfDishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.getDishes();
    this.getTypeOfDishes();
  }

  getDishes(): void {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes);
  }

  getTypeOfDishes(): void {
    this.dishService.getDishes()
      .subscribe(dishes => this.typesOfDishes = dishes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return;}
      this.dishService.addDish({name} as Dish)
      .subscribe(dish => {
        this.dishes.push(dish);
      });
  }

  addTypeOfDishes(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this.dishService.addDish({name} as Dish)
      .subscribe(dish => {
        this.typesOfDishes.push(dish);
      });
  }

  delete(dish: Dish): void {
      this.dishes = this.dishes.filter(d => d !== dish);
      this.dishService.deleteDish(dish).subscribe();
  }
  deleteTypeOfDish(dish: Dish): void {
    this.typesOfDishes = this.typesOfDishes.filter(d => d !== dish);
    this.dishService.deleteDish(dish).subscribe();
  }

  onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }

}

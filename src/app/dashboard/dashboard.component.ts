import { Component, OnInit } from '@angular/core';
import {Dish} from "../dish";
import {DishService} from "../service/dish.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dishes: Dish[] = [];
  typesOfDishes: Dish[]  =[];
  appetizers: Dish[] = [];
  soups: Dish[] = [];
  mainDishes: Dish[] = [];
  desserts: Dish[] = [];
  aperitifs: Dish[] =[];
  selectedDish: Dish;


  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.getDishes();
    this.getTypesOfDishes();
    this.getAppetizers();
    this.getSoups();
    this.getMainDishes();
    this.getDesserts();
    this.getAperitifs()
  }

  getDishes(): void {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes.slice(0, dishes.length));
  }

  getTypesOfDishes(): void {
    this.dishService.getTypesOfDishes()
      .subscribe(typesOfDishes => this.typesOfDishes = typesOfDishes.slice(0, typesOfDishes.length) )
  }

  getAppetizers(): void {
    this.dishService.getAppetizer()
      .subscribe(appetizers => this.appetizers = appetizers.slice(0, appetizers.length));
  }

  getSoups(): void {
    this.dishService.getSoup()
      .subscribe(soups => this.soups = soups.slice(0, soups.length));
  }

  getMainDishes(): void {
    this.dishService.getMainDish()
      .subscribe(mainDishes => this.mainDishes = mainDishes.slice(0, mainDishes.length));
  }

  getDesserts(): void {
    this.dishService.getDessert()
      .subscribe(desserts => this.desserts = desserts.slice(0, desserts.length));
  }

  getAperitifs(): void {
    this.dishService.getAperitif()
      .subscribe(aperitifs => this.aperitifs = aperitifs.slice(0, aperitifs.length));
  }

  onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }




}

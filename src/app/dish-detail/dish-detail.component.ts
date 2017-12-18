import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Dish } from "../dish";
import { DishService } from "../service/dish.service";

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})

export class DishDetailComponent implements OnInit {

  @Input() dish: Dish;

  private currentDish;
  setDish(dish) {
    if (this.currentDish === dish) return;
    this.currentDish = dish;
  }

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDish();
  }

  getDish(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dishService.getDish(id)
      .subscribe(dish => this.dish = dish);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.dishService.updateDish(this.dish)
  //     .subscribe(() => this.goBack());
  // }
}

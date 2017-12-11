import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { of } from "rxjs/observable/of";

import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import { Dish } from "../dish";
import { DishService } from "../dish.service";

@Component({
  selector: 'app-dish-search',
  templateUrl: './dish-search.component.html',
  styleUrls: ['./dish-search.component.scss']
})
export class DishSearchComponent implements OnInit {
  dishes$: Observable<Dish[]>;
  private searchTerms = new Subject<String>();

  constructor(private dishService: DishService) { }

  // push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.dishes$ = this.searchTerms.pipe(
      // wait 300ms after keystroke before considering the term
      debounceTime(300),

      // ignore the new term is the same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.dishService.searchDishes(term)),

    );
  }

}

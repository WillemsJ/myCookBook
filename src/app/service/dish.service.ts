import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import {catchError, map, tap} from "rxjs/operators";

import { Dish } from "../dish";
import { MessageService } from "./message.service";
import {AngularFireDatabase} from "angularfire2/database";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DishService {

  private dishesUrl = 'api/dishes'; // URL to web api
  private dishesKeys: string[];

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private db: AngularFireDatabase) { }

  // getDishes(): Observable<Dish[]> {
  //   // this.messageService.add('DishService: fetched dishes');
  //   return this.http.get<Dish[]>(this.dishesUrl).pipe(
  //       tap(dishes => this.log(`fetched dishes`)),
  //       catchError(this.handleError('getDishes', []))
  //   );
  // }

  getDishesKeys() {
    return this.dishesKeys;
  }

  getDishes(listPath): Observable<any> {
    return this.db.object(listPath).valueChanges();
  }

  getDrinks(listPath): Observable<any> {
    return this.db.object(listPath).valueChanges();
  }

  getUnits(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  chooseDish() {
    this.getDishes('/Dishes').subscribe((dishes) => {
      // console.log(dishes);
      this.dishesKeys = Object.keys(dishes);
    });
  }
  chooseDrinks() {
    this.getDrinks('/Drinks').subscribe(drinks => {
      console.log(drinks);
      this.dishesKeys = Object.keys(drinks);
    });
  }

  chooseUnits() {
    this.getUnits('/Units').subscribe(units => {
      console.log(units);
      this.dishesKeys = units;
    });
  }

  getDish(id: number): Observable<Dish> {
    // this.messageService.add(`DishService: fetched dish id=${id}`);
    const url = `${this.dishesUrl}/?id=${id}`;
    return this.http.get<Dish>(url).pipe(
      tap(_ => this.log(`fetched dish id=${id}`)),
      catchError(this.handleError<Dish>(`getDish id=${id}`))
    );
  }

  searchDishes(term: string): Observable<Dish[]> {
    if (!term.trim()) {
      // if not search term, return empty dish array
      return of([]);
    }
    return this.http.get<Dish[]>(`api/dishes/?name=${term}`).pipe(
      tap(_ => this.log(`found dishes matching ${term}`)),
      catchError(this.handleError<Dish[]>('deleteDish', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('DishService: ' + message);
  }
}

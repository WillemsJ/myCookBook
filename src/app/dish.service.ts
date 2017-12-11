import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import {catchError, map, tap} from "rxjs/operators";

import { Dish } from "./dish";
import { MessageService } from "./message.service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DishService {

  private dishesUrl = 'api/dishes'; // URL to web api
  private dishTypeUrl = 'api/typesOfDishes';
  private appetizerUrl = 'api/appetizer';
  private soupUrl = 'api/soup';
  private mainDishUrl = 'api/mainDish';
  private dessertUrl = 'api/dessert';
  private aperitifUrl = 'api/aperitif';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getDishes(): Observable<Dish[]> {
    // this.messageService.add('DishService: fetched dishes');
    return this.http.get<Dish[]>(this.dishesUrl).pipe(
        tap(dishes => this.log(`fetched dishes`)),
        catchError(this.handleError('getDishes', []))
    );
  }

  getTypesOfDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.dishTypeUrl).pipe(
      tap(typeOfDishes => this.log(`fetched types of dishes`)),
      catchError(this.handleError('getTypesOfDishes', []))
    );
  }

  getAppetizer(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.appetizerUrl).pipe(
      tap(appetizer => this.log(`fetched appetizers`)),
      catchError(this.handleError('getAppetizer', []))
    );
  }

  getSoup(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.soupUrl).pipe(
      tap(soup => this.log(`fetched soups`)),
      catchError(this.handleError('getSoup', []))
    );
  }

  getMainDish(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.mainDishUrl).pipe(
      tap(mainDish => this.log(`fetched main dishes`)),
      catchError(this.handleError('getMainDish', []))
    );
  }

  getDessert(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.dessertUrl).pipe(
      tap(dessert => this.log(`fetched dessert`)),
      catchError(this.handleError('getDessert', []))
    );
  }

  getAperitif(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.aperitifUrl).pipe(
      tap(aperitif => this.log(`fetched aperitif`)),
      catchError(this.handleError('getAperitif', []))
    );
  }

  getDishNo404<Data>(id: number): Observable<Dish> {
    const url = `${this.dishesUrl}/?id=${id}`;
    return this.http.get<Dish>(url)
      .pipe(
        map(dishes => dishes[0]), // returns a {0|1} element array
        tap(d => {
          const outcome = d ? `fetched` : `did not find`;
          this.log(`${outcome} dish id = ${id}`);
        }),
        catchError(this.handleError<Dish>(`getDish id = ${id}`))
    );
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

  addDish(dish: Dish): Observable<Dish> {
    return this.http.post<Dish>(this.dishesUrl, dish, httpOptions).pipe(
      tap((dish: Dish) => this.log(`added dish w/ id=${dish.id}`)),
      catchError(this.handleError<Dish>('addDish'))
    )
  }

  deleteDish(dish: Dish | number): Observable<Dish> {
    const id = typeof dish === 'number' ? dish : dish.id;
    const url = `${this.dishesUrl}/${id}`;

    return this.http.delete<Dish>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted dish id = ${id}`)),
      catchError(this.handleError<Dish>('deleteDish'))
    )
  }

  updateDish(dish: Dish): Observable<any> {
    return this.http.put(this.dishesUrl, dish, httpOptions).pipe(
      tap(_ => this.log(`updated dish id=${dish.id}`)),
      catchError(this.handleError<any>('updateDish'))
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

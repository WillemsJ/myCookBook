import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {
  private subject = new Subject<any>();

  sendDishesCategory(category: string) {
    this.subject.next({dish: category});
  }

  sendDrinksCategory(category: string) {
    this.subject.next({drink: category});
  }

  getCategory(): Observable<any> {
    return this.subject.asObservable();
  }

}

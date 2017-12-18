import { Component, Input, OnInit } from '@angular/core';
import { DishNavComponent } from '../dish-nav/dish-nav.component';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { CategoryService } from '../service/chosencategory.service';
import { Subscription } from 'rxjs/Subscription';
import { EventBusService } from '../service/event-bus.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dishesObservable: Observable<any[]>;
  user: Observable<firebase.User>;
  userPromise: Promise<firebase.User>;
  food: string[];
  recipeIndex: string[];

  category: any;
  categoryIndex = '';
  subscription: Subscription;


  constructor(private categoryService: CategoryService, private db: AngularFireDatabase,
              public afAuth: AngularFireAuth, private event: EventBusService) {
    this.subscription = this.categoryService.getCategory().subscribe(category => {
      this.category = category;
      console.log(category);
    });
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(auth => {
      if (auth && auth.uid) {
        this.user = this.afAuth.authState;

        this.processData();
        this.getCategoryIndex();
      }
      if (!(auth && auth.uid)) {
        this.dishesObservable = null;
        this.user = null;
        this.userPromise = null;
      }

    });
  }

  sendCategoryIndex(dish) {
    if (dish === 'Appetizer') {
      this.sendAppetizers();
    }
    if (dish === 'Soup') {
      this.sendSoups();
    }
    if (dish === 'MainDish') {
      this.sendMainDishes();
    }
    if (dish === 'Cake') {
      this.sendCakes();
    }
    if (dish === 'Dessert') {
      this.sendDesserts();
    }
  }

  private sendAppetizers() {
    this.event.emit('changedCategoryIndex', {listPath: '/Appetizer'});
  }
  private sendSoups() {
    this.event.emit('changedCategoryIndex', {listPath: '/Soup'});
  }
  private sendMainDishes() {
    this.event.emit('changedCategoryIndex', {listPath: '/MainDish'});
  }
  private sendCakes() {
    this.event.emit('changedCategoryIndex', {listPath: '/Cake'});
  }
  private sendDesserts() {
    this.event.emit('changedCategoryIndex', {listPath: '/Dessert'});
  }


  private processData(): void {
    this.event.observe('changedCategory').subscribe((value) => {
      // console.log(value.listPath);
      this.db.object(value.listPath).valueChanges().subscribe(values => {
        console.log(values);
        this.food = Object.keys(values);
        this.food.sort(function (a, b) {
          return (values[a].__meta.order > values[b].__meta.order) ? 1 : ((values[a].__meta.order > values[b].__meta.order) ? -1 : 0);
        });

        // console.log(Object.keys(values));
      });
    });
  }

  private getCategoryIndex(): void {
    this.event.observe('changedCategoryIndex').subscribe((value) => {
        this.db.object('/Dishes' + value.listPath + '/recipes').valueChanges().subscribe((recipes) => {
          this.recipeIndex = Object.keys(recipes);
          console.log(this.recipeIndex);
        });
    });
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output() dishEvent = new EventEmitter<any>();

  dishesObservable: Observable<any[]>;
  user: Observable<firebase.User>;
  userPromise: Promise<firebase.User>;
  food: string[];
  recipeIndex: string[];

  category: any;
  subscription: Subscription;

  public selectedFood: number;


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
        this.getRecipeIndex();
      }
      if (!(auth && auth.uid)) {
        this.dishesObservable = null;
        this.user = null;
        this.userPromise = null;
      }

    });
  }

  sendCategoryIndex(dish, index) {
    this.selectedFood = index;
    if (dish === 'Appetizer') {
      this.event.emit('changedCategoryIndex', {listPath: '/Appetizer'});
      // this.sendAppetizers();
    }
    if (dish === 'Soup') {
      this.event.emit('changedCategoryIndex', {listPath: '/Soup'});
    }
    if (dish === 'MainDish') {
      this.event.emit('changedCategoryIndex', {listPath: '/MainDish'});
    }
    if (dish === 'Cake') {
      // this.sendCakes();
      this.event.emit('changedCategoryIndex', {listPath: '/Cake'});
    }
    if (dish === 'Dessert') {
      // this.sendDesserts();
      this.event.emit('changedCategoryIndex', {listPath: '/Dessert'});
    }
    if (dish === 'WarmDrink') {
      this.event.emit('changedCategoryIndex', {listPath: '/WarmDrink'});
    }
    if (dish === 'ColdDrink') {
      this.event.emit('changedCategoryIndex', {listPath: '/ColdDrink'});
    }
    if (dish === 'AlcoholFreeCocktail') {
      this.event.emit('changedCategoryIndex', {listPath: '/AlcoholFreeCocktail'});
    }
    if (dish === 'AlcoholCocktail') {
      this.event.emit('changedCategoryIndex', {listPath: '/AlcoholCocktail'});
    }
  }

  chooseDish(recipeName){
    this.dishEvent.emit(recipeName);
    console.log('chooseDish: ' + this.dishEvent);
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
  private getRecipeIndex(): void {
    this.event.observe('changedCategoryIndex').subscribe((value) => {
        this.db.object('/Dishes' + value.listPath + '/recipes').valueChanges().subscribe((recipes) => {
          this.recipeIndex = Object.keys(recipes);
          console.log(this.recipeIndex);
        });
    });
    this.event.observe('changedCategoryIndex').subscribe((value) => {
      this.db.object('/Drinks' + value.listPath + '/recipes').valueChanges().subscribe((recipes) => {
        this.recipeIndex = Object.keys(recipes);
        console.log(this.recipeIndex);
      });
    });
  }
}

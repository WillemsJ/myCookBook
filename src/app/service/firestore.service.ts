import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Recipe} from '../cookbookRecipes/recipe';


@Injectable()
export class FirestoreService {
  recipeCollection: AngularFirestoreCollection<Recipe>;
  recipes: any;
  recipe: string;
  ingredients: string;
  preparation: string;
  recipe_image: string;

  constructor(private afs: AngularFirestore) { }

  findDessertCollection() {
    return this.recipeCollection = this.afs.collection('Dessert');
  }
  getDessert(recipeId): any {
    return this.afs.doc('Dessert/' + recipeId);
  }
  deleteDessert(recipeId) {
    return this.afs.doc('Dessert/' + recipeId).delete();
  }

  findMainDishCollection() {
    return this.recipeCollection = this.afs.collection('Main Dish');
  }
  getMainDish(recipeId): any {
    return this.afs.doc('Main Dish/' + recipeId);
  }
  deleteMainDish(recipeId) {
    return this.afs.doc('Main Dish/' + recipeId).delete();
  }

  findWarmDrinkCollection() {
    return this.recipeCollection = this.afs.collection('Warm Drink');
  }
  getWarmDrink(recipeId): any {
    return this.afs.doc('Warm Drink/' + recipeId);
  }
  deleteWarmDrink(recipeId) {
    return this.afs.doc('Warm Drink/' + recipeId).delete();
  }
}

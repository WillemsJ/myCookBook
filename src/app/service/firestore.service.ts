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

  findAppetizerCollection() {
    return this.recipeCollection = this.afs.collection('Appetizer');
  }
  getAppetizer(recipeId): any {
    return this.afs.doc('Appetizer/' + recipeId);
  }
  deleteAppetizer(recipeId) {
    return this.afs.doc('Appetizer/' + recipeId).delete();
  }

  findSoupCollection() {
    return this.recipeCollection = this.afs.collection('Soup');
  }
  getSoup(recipeId): any {
    return this.afs.doc('Soup/' + recipeId);
  }
  deleteSoup(recipeId) {
    return this.afs.doc('Soup/' + recipeId).delete();
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

  findCakeCollection() {
    return this.recipeCollection = this.afs.collection('Cake');
  }
  getCake(recipeId): any {
    return this.afs.doc('Cake/' + recipeId);
  }
  deleteCake(recipeId) {
    return this.afs.doc('Cake/' + recipeId).delete();
  }

  findDessertCollection() {
    return this.recipeCollection = this.afs.collection('Dessert');
  }
  getDessert(recipeId): any {
    return this.afs.doc('Dessert/' + recipeId);
  }
  deleteDessert(recipeId) {
    return this.afs.doc('Dessert/' + recipeId).delete();
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

  findColdDrinkCollection() {
    return this.recipeCollection = this.afs.collection('Cold Drink');
  }
  getColdDrink(recipeId): any {
    return this.afs.doc('Cold Drink/' + recipeId);
  }
  deleteColdDrink(recipeId) {
    return this.afs.doc('Cold Drink/' + recipeId).delete();
  }

  findNACocktailCollection() {
    return this.recipeCollection = this.afs.collection('Alcohol-free Cocktail');
  }
  getNACocktail(recipeId): any {
    return this.afs.doc('Alcohol-free Cocktail/' + recipeId);
  }
  deleteNACocktail(recipeId) {
    return this.afs.doc('Alcohol-free Cocktail/' + recipeId).delete();
  }

  findCocktailCollection() {
    return this.recipeCollection = this.afs.collection('Alcohol Cocktail');
  }
  getCocktail(recipeId): any {
    return this.afs.doc('Alcohol Cocktail/' + recipeId);
  }
  deleteCocktail(recipeId) {
    return this.afs.doc('Alcohol Cocktail/' + recipeId).delete();
  }
}

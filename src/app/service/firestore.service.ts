import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Recipe} from '../cookbookRecipes/recipe';


@Injectable()
export class FirestoreService {
  recipeCollection: AngularFirestoreCollection<Recipe>;
  appetizerCollection: AngularFirestoreCollection<Recipe>;
  recipes: any;
  recipe: string;
  ingredients: string;
  preparation: string;
  recipe_image: string;

  recipeDoc: AngularFirestoreDocument<Recipe>;
  recipeObservable: Observable<Recipe>;


  constructor(private afs: AngularFirestore) { }

  findAppetizerCollection() {
    return this.appetizerCollection = this.afs.collection('Dishes/f2E8O2qf6y0hQwnFVQ2s/Appetizer/');
  }
  findRecipeCollection() {
    return this.recipeCollection = this.afs.collection('recipes');
  }
  findDishes(recipeId) {
    return this.recipeCollection = this.afs.collection('Dishes/' + recipeId);
  }

  addRecipe() {
    this.afs.collection('recipes/').add({'recipe': this.recipe, 'ingredients': this.ingredients,
      'preparation': this.preparation, 'image': this.recipe_image});
  }
  getRecipe(recipeId) {
    this.recipeDoc = this.afs.doc('recipes/' + recipeId);
    this.recipeObservable = this.recipeDoc.valueChanges();
  }
  deleteRecipe(recipeId) {
    this.afs.doc('recipes/' + recipeId).delete();
  }


  addAppetizer() {
    this.afs.collection('Dishes/f2E8O2qf6y0hQwnFVQ2s/Appetizer/').add({'recipe': this.recipe, 'ingredients': this.ingredients,
      'preparation': this.preparation, 'image': this.recipe_image});
  }
  getAppetizers(recipeId) {
    this.afs.doc('Dishes/f2E8O2qf6y0hQwnFVQ2s/Appetizer/' + recipeId);
    this.recipeObservable = this.recipeDoc.valueChanges();
  }
  deleteAppetizer(recipeId) {
    this.afs.doc('Dishes/f2E8O2qf6y0hQwnFVQ2s/Appetizer/' + recipeId).delete();
  }


  getDishes(recipeId) {
    this.afs.doc('Dishes/' + recipeId + '/Appetizer/');
    // this.afs.collection('Dishes/' + recipeId);
    this.recipeObservable = this.recipeDoc.valueChanges();
  }
}

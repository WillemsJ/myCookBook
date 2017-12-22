import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../cookbookRecipes/recipe';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FirestoreService } from '../service/firestore.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipeForm: FormGroup;

  recipeCollection: AngularFirestoreCollection<Recipe>;
  appetizerCollection: AngularFirestoreCollection<Recipe>;
  recipes: any;
  appetizers: any;

  recipe: string;
  ingredients: string;
  preparation: string;
  recipe_image: string;

  recipeDoc: AngularFirestoreDocument<Recipe>;
  recipeObservable: Observable<Recipe>;

  constructor(private formbuilder: FormBuilder, private afs: AngularFirestore, private firestoreDb: FirestoreService) { }

  ngOnInit() {
    this.callRecipeData();
    this.callAppetizerData();
    this.createForm();
  }

  callAppetizerData() {
    this.appetizerCollection = this.firestoreDb.findAppetizerCollection();
    this.appetizers = this.appetizerCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Recipe;
          const id = a.payload.doc.id;
          return { id, data};
        });
      });
  }
  callRecipeData() {
    this.recipeCollection = this.firestoreDb.findRecipeCollection();
    this.recipes = this.recipeCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Recipe;
          const id = a.payload.doc.id;
          return { id, data};
        });
      });
  }

  //

  addRecipe() {
    this.afs.collection('recipes/')
      .add({'recipe': this.recipeForm.getRawValue().F_ingredients,
        'ingredients': this.recipeForm.getRawValue().F_ingredients,
        'preparation': this.recipeForm.getRawValue().F_preparation,
        'recipe_image': this.recipeForm.getRawValue().F_recipe_image});
    this.recipeForm.reset();
  }
  getRecipe(recipeId) {
    this.recipeDoc = this.afs.doc('recipes/' + recipeId);
    this.recipeObservable = this.recipeDoc.valueChanges();
  }
  deleteRecipe(recipeId) {
    return this.afs.doc('recipes/' + recipeId).delete();
  }


  addAppetizer() {
    this.afs.collection('Dishes/f2E8O2qf6y0hQwnFVQ2s/Appetizer/')
      .add({'recipe': this.recipe, 'ingredients': this.ingredients,
        'preparation': this.preparation, 'recipe_image': this.recipe_image});
  }
  getAppetizers(recipeId) {
    this.afs.doc('Dishes/f2E8O2qf6y0hQwnFVQ2s/Appetizer/' + recipeId);
    this.recipeObservable = this.recipeDoc.valueChanges();
  }
  deleteAppetizer(recipeId) {
    return this.afs.doc('Dishes/f2E8O2qf6y0hQwnFVQ2s/Appetizer/' + recipeId).delete();
  }

  private createForm() {
    this.recipeForm = this.formbuilder.group({
      F_recipe: new FormControl('', [Validators.required]),
      F_ingredients: new FormControl('', [Validators.required]),
      F_preparation: new FormControl('', [Validators.required]),
      F_recipe_image: new FormControl('')
    });
  }
}

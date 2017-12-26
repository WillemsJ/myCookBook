import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../cookbookRecipes/recipe';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FirestoreService } from '../service/firestore.service';
import { EventBusService } from '../service/event-bus.service';
import { RecipeId} from '../cookbookRecipes/recipe-id';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  fire;
  recipeForm: FormGroup;

  recipeCollection: AngularFirestoreCollection<Recipe>;
  desserts: any;
  maindishes: any;
  warmdrinks: any;

  recipe: string;
  ingredients: string;
  preparation: string;
  recipe_image: string;

  editState = false;
  recipeToEdit: RecipeId;


  recipeDoc: AngularFirestoreDocument<Recipe>;
  recipeObservable: Observable<Recipe>;



  constructor( private event: EventBusService,
               private formbuilder: FormBuilder,
               private afs: AngularFirestore, private firestore: FirestoreService, private viewList: EventBusService) {
    this.fire = event;
  }

  ngOnInit() {
    this.viewList.hide();
    this.callDessertData();
    this.callMainDishData();
    this.callWarmDrinkData();
    this.createForm();
    this.fire = event;
  }
  callDessertData() {
    this.recipeCollection = this.firestore.findDessertCollection();
    this.desserts = this.recipeCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Recipe;
          const id = a.payload.doc.id;
          return { id, data};
        });
      });
  }
  callMainDishData() {
    this.recipeCollection = this.firestore.findMainDishCollection();
    this.maindishes = this.recipeCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Recipe;
          const id = a.payload.doc.id;
          return { id, data};
        });
      });
  }
  callWarmDrinkData() {
    this.recipeCollection = this.firestore.findWarmDrinkCollection();
    this.warmdrinks = this.recipeCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Recipe;
          const id = a.payload.doc.id;
          return { id, data};
        });
      });
  }

  addRecipe() {
    const eID = document.getElementById("selected");
    const selectedItem = eID.options[eID.selectedIndex].text;
    console.log(selectedItem + '/');

    this.afs.collection( '' + selectedItem)
      .add({'recipe': this.recipeForm.getRawValue().F_recipe,
        'ingredients': this.recipeForm.getRawValue().F_ingredients,
        'preparation': this.recipeForm.getRawValue().F_preparation,
        'recipe_image': this.recipeForm.getRawValue().F_recipe_image});
    this.clearForm();
  }

  updateRecipe(event, recipeId) {
    this.editState = true;
    this.recipeToEdit = recipeId;
  }

  clearForm() {
    this.recipeForm.reset();
  }


  getDessert(recipeId) {
    this.recipeDoc = this.firestore.getDessert(recipeId);
    return this.recipeObservable = this.recipeDoc.valueChanges();
  }
  deleteDessert(recipeId) {
    return this.firestore.deleteDessert(recipeId);
  }
  getMainDish(recipeId) {
    this.recipeDoc = this.firestore.getMainDish(recipeId);
    return this.recipeObservable = this.recipeDoc.valueChanges();
  }
  deleteMainDish(recipeId) {
    return this.firestore.deleteMainDish(recipeId);
  }
  getWarmDrink(recipeId) {
    this.recipeDoc = this.firestore.getWarmDrink(recipeId);
    return this.recipeObservable = this.recipeDoc.valueChanges();
  }
  deleteWarmDrink(recipeId) {
    return this.firestore.deleteWarmDrink(recipeId);
  }

  private createForm() {
    this.recipeForm = this.formbuilder.group({
      F_recipe: new FormControl('', [Validators.required]),
      F_ingredients: new FormControl('', [Validators.required]),
      F_preparation: new FormControl('', [Validators.required]),
      F_recipe_image: new FormControl('')
    });
  }

  showContentView() {
    this.event.show();
  }
}

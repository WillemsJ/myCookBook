import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MDBBootstrapModule } from "angular-bootstrap-md/index";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from './service/in-memory-data.service';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from "./service/message.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DishSearchComponent } from './dish-search/dish-search.component';
import { DishNavComponent } from './dish-nav/dish-nav.component';
import { UnitcalcComponent } from './unitcalc/unitcalc.component';


import { environment } from "../environments/environment";
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { CategoryService } from './service/chosencategory.service';
import { EventBusService} from './service/event-bus.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirestoreService } from './service/firestore.service';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DishDetailComponent,
    MessagesComponent,
    DashboardComponent,
    DishSearchComponent,
    DishNavComponent,
    UnitcalcComponent,
    AddRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    FlexLayoutModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [MessageService, CategoryService, EventBusService, FirestoreService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]

})
export class AppModule { }

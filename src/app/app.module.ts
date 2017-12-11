import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from './service/in-memory-data.service';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { DishService } from "./service/dish.service";
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from "./service/message.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DishSearchComponent } from './dish-search/dish-search.component';


import { environment } from "../environments/environment";
import { AngularFireModule} from "angularfire2";
import { AngularFireDatabaseModule} from "angularfire2/database";
import { AngularFireAuthModule} from "angularfire2/auth";
import { AuthService } from './service/authentication/auth.service';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishDetailComponent,
    MessagesComponent,
    DashboardComponent,
    DishSearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    FlexLayoutModule
  ],
  providers: [DishService, MessageService, AuthService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]

})
export class AppModule { }

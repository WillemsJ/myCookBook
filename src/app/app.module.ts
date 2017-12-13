import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MDBBootstrapModule } from "angular-bootstrap-md/index";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import  { DishService } from "./dish.service";
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from "./message.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DishSearchComponent } from './dish-search/dish-search.component';
import { DishNavComponent } from './dish-nav/dish-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishDetailComponent,
    MessagesComponent,
    DashboardComponent,
    DishSearchComponent,
    DishNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    FlexLayoutModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [DishService, MessageService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]

})
export class AppModule { }

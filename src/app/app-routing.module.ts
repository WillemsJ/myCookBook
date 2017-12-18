import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {DashboardComponent} from "./dashboard/dashboard.component";
import {DishDetailComponent} from "./dish-detail/dish-detail.component";
import {DishNavComponent} from "./dish-nav/dish-nav.component";

// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent, children: [
//     { path: 'recipesList', component: DishDetailComponent, outlet: 'Lis' }
//     ] },
// ];

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'recipes', component:DishNavComponent, children: [
      { path: 'recipesList', component: DashboardComponent, outlet: 'list' },
      { path: ':id', component: DishDetailComponent, outlet: 'detail' }
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

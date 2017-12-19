import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  dishType: string;

  protected static appcomp: AppComponent;

  title = 'My Cookbook';

  static getInstance(): AppComponent {
    if (!this.appcomp) {
      this.appcomp = new AppComponent();
    }
    return this.appcomp;
  }

  dishEvent(dishType){
    this.dishType = dishType;
  }


}

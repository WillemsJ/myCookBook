import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  protected static appcomp: AppComponent;

  title = 'My Cookbook';

  static getInstance(): AppComponent {
    if (!this.appcomp) {
      this.appcomp = new AppComponent();
    }
    return this.appcomp;
  }


}

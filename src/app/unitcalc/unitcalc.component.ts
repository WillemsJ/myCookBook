import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unitcalc',
  templateUrl: './unitcalc.component.html',
  styleUrls: ['./unitcalc.component.scss']
})

export class UnitcalcComponent implements OnInit {

  private units = [
    'oz',
    'cl',
    'dl',
    'cup',
    'gr',
    'tblsp'
  ];
  ounces: number;
  cl: number;
  dl: number;
  cup: number;
  gr: number;
  spoon: number;

  constructor() { }

  ngOnInit() {
  }

  toOunces(input: number): number {
    for (let unit of this.units) {
      switch (unit) {
        case 'cl':
          input *= 0.338140227;
          break;
        case 'dl':
          input *= 3.38140227;
          break;
        case 'cup':
          input *= 8;
          break;
        case 'tblsp':
          input *= 2;
          break;
        case 'gr':
          input *= 0.035274;
          break;
      }
    }
    return input;
  }

  toCl(input: number): number {
    for (let unit of this.units) {
      switch (unit) {
        case 'gr':
          input *= 0.1;
          break;
        case 'cup':
          input *= 23.6588236;
          break;
        case 'tblsp':
          input *= 1.47867648;
          break;
        case 'oz':
          input *= 2.95735296;
          break;
        case 'dl':
          input *= 10;
      }
    }
    return input;
  }

    toDl(): number {
      return;
    }

    toCup(): number {
      return;
    }

    toGr(): number {
      return;
    }

    toSpoons(): number {
      return;
    }
  }

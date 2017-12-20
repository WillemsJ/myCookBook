import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-unitcalc',
  templateUrl: './unitcalc.component.html',
  styleUrls: ['./unitcalc.component.scss']
})
export class UnitcalcComponent implements OnInit {

  @Input() unitInput: number;
  @Output() inputEvent = new EventEmitter<any>();

  //get from database
  units: Array<Object> = [
    {name: 'oz'},
    {name: 'cl'},
    {name: 'dl'},
    {name: 'cup'},
    {name: 'gr'},
    {name: 'tblsp'}
  ];

  currentInput: number;
  selectedValue: string;
  selectedOutputValue: string;
  unitCalcForm: FormGroup;
  resultConvertion: number;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
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

  chooseInput(input) {
    this.inputEvent.emit(input);
  }

  calculate() {
    const fromType = this.unitCalcForm.get('fromType').value;
    const fromValue = this.unitCalcForm.get('fromValue').value;
    const toType = this.unitCalcForm.get('toType').value;

    if (fromType == 'oz') {
      if (toType == 'cl') {
        this.resultConvertion = fromValue * 0.338140227;
      }
      if (toType == 'dl') {
        this.resultConvertion = fromValue * 3.38140227;
      }
      if (toType == 'cup') {
        this.resultConvertion = fromValue * 8;
      }
      if (toType == 'gr') {
        this.resultConvertion = fromValue * 0.035274;
      }
      if (toType == 'tblsp') {
        this.resultConvertion = fromValue * 2;
      }
    }
    if (fromType == 'cl') {
      if (toType == 'dl') {
        this.resultConvertion = fromValue * 0.1;
      }
      if (toType == 'cup') {
        this.resultConvertion = fromValue * 23.6588236;
      }
      if (toType == 'gr') {
        this.resultConvertion = fromValue * 10;
      }
      if (toType == 'tblsp') {
        this.resultConvertion = fromValue / 1.47867648;
      }
      if (toType == 'oz') {
        this.resultConvertion = fromValue / 2.95735296;
      }
    }
    if (fromType == 'dl') {

    }
    if (fromType == 'cup') {

    }
    if (fromType == 'gr') {
      if (toType == 'tblsp') {
      }
      if (toType == 'oz') {
      }
      if (toType == 'cl') {
      }
      if (toType == 'dl') {
      }
      if (toType == 'cup') {
      }
    }
    if (fromType == 'tblsp') {

    }
  }

  getValueFromSelect(value) {
    this.selectedValue = value;
  }

  getValueFromOutputSelect(value) {
    this.selectedOutputValue = value;
  }

  getInput($event): void {
    this.currentInput = $event;
  }

  private createForm() {
    this.unitCalcForm = this._formBuilder.group({
      fromType: new FormControl('', [Validators.required]),
      fromValue: new FormControl(0, [Validators.required, Validators.min(0)]),
      toType: new FormControl('', [Validators.required])
    });
  }
}

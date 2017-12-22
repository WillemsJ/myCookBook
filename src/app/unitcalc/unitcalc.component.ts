import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UnitCalcService} from "../service/unit-calc.service";

@Component({
  selector: 'app-unitcalc',
  templateUrl: './unitcalc.component.html',
  styleUrls: ['./unitcalc.component.scss']
})
export class UnitcalcComponent implements OnInit {

  @Input() unitInput: number;
  @Output() inputEvent = new EventEmitter<any>();

  //get from database !!!!
  units: Array<Object> = [
    {name: 'oz'},
    {name: 'cl'},
    {name: 'dl'},
    {name: 'cup'},
    {name: 'gr'},
    {name: 'tblsp'}
  ];

  //also get from db !!!!!!
  cupToGramIngredients: Array<Object> = [
    { name: 'Butter' },
    { name: 'All-purpose Flour and Confectioners\' Sugar' },
    { name: 'Bread Flour' },
    { name: 'Rolled Oats' },
    { name: 'White Sugar' },
    { name: 'Packed Brown Sugar' },
    { name: 'Honey, Molasses, Syrup' }
  ];

  cupWarning: string = 'Only for calculating from CUPS or tablespoons to other units. \n' +
    'Choose your desired ingredient:';
  spoonWarning: string = 'Only for calculating from tablespoons to other units. \n' +
    'Choose your desired ingredient';

  currentInput: number;
  selectedValue: string;
  selectedOutputValue: string;
  unitCalcForm: FormGroup;
  resultConvertion: number = 0;

  constructor(private _formBuilder: FormBuilder, private uniCalcService: UnitCalcService) {
  }

  ngOnInit() {
    this.createForm();
  }

  chooseInput(input) {
    this.inputEvent.emit(input);
  }

  calculate() {
    const fromType = this.unitCalcForm.get('fromType').value;
    const fromValue = this.unitCalcForm.get('fromValue').value;
    const toType = this.unitCalcForm.get('toType').value;
    const cupOrTblspToXIngredients = this.unitCalcForm.get('cupOrTblspToXIngredients').value;
    // this.resultConvertion = 0;
    this.resultConvertion = this.uniCalcService.calculate(this.resultConvertion, fromType, toType, fromValue, cupOrTblspToXIngredients);

    // if (fromType == 'oz') {
    //   if (toType == 'cl') {
    //     this.resultConvertion = fromValue * 0.338140227;
    //   }
    //   if (toType == 'dl') {
    //     this.resultConvertion = fromValue * 3.38140227;
    //   }
    //   if (toType == 'cup') {
    //     this.resultConvertion = fromValue * 8;
    //   }
    //   if (toType == 'gr') {
    //     this.resultConvertion = fromValue * 28;
    //   }
    //   if (toType == 'tblsp') {
    //     this.resultConvertion = fromValue * 2;
    //   }
    // }
    // if (fromType == 'cl') {
    //   if (toType == 'dl') {
    //     this.resultConvertion = fromValue * 0.1;
    //   }
    //   if (toType == 'cup') {
    //     this.resultConvertion = fromValue * 23.6588236;
    //   }
    //   if (toType == 'gr') {
    //     this.resultConvertion = fromValue * 10;
    //   }
    //   if (toType == 'tblsp') {
    //     this.resultConvertion = fromValue / 1.47867648;
    //   }
    //   if (toType == 'oz') {
    //     this.resultConvertion = fromValue / 2.95735296;
    //   }
    // }
    // if (fromType == 'dl') {
    //   if (toType == 'cup') {
    //     this.resultConvertion = fromValue / 0.422675284;
    //   }
    //   if (toType == 'gr') {
    //     this.resultConvertion = fromValue / 100;
    //   }
    //   if (toType == 'tblsp') {
    //     this.resultConvertion = fromValue / 6.76280454;
    //   }
    //   if (toType == 'oz') {
    //     this.resultConvertion = fromValue / 3.38140227;
    //   }
    //   if (toType == 'cl') {
    //     this.resultConvertion = fromValue * 10;
    //   }
    // }
    // if (fromType == 'cup') {
    //
    // }
    // if (fromType == 'gr') {
    //   if (toType == 'tblsp') {
    //   }
    //   if (toType == 'oz') {
    //   }
    //   if (toType == 'cl') {
    //   }
    //   if (toType == 'dl') {
    //   }
    //   if (toType == 'cup') {
    //   }
    // }
    // if (fromType == 'tblsp') {
    //
    // }
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
      toType: new FormControl('', [Validators.required]),
      cupOrTblspToXIngredients: new FormControl('')
    });
  }
}

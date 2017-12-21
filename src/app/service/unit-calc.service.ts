import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class UnitCalcService implements OnInit{

  constructor() { }

  ngOnInit() {
  }

  calculate(resultConvertion: number, fromType: string, toType: string, fromValue: number, cupOrTblspToXIngredients: string ) {

    if (fromType == 'oz') {
      if (toType == 'cl') {
        resultConvertion = fromValue * 2.95735296;
      }
      if (toType == 'dl') {
        resultConvertion = fromValue * 0.295735296;
      }
      if (toType == 'cup') {
        resultConvertion = fromValue * 0.125;
      }
      if (toType == 'gr') {
        resultConvertion = fromValue * 28.3495231;
      }
      if (toType == 'tblsp') {
        resultConvertion = fromValue * 2;
      }
    }
    if (fromType == 'cl') {
      if (toType == 'dl') {
        resultConvertion = fromValue * 0.1;
      }
      if (toType == 'cup') {
        resultConvertion = fromValue * 0.0422675284;
      }
      if (toType == 'gr') {
        resultConvertion = fromValue * 10;
      }
      if (toType == 'tblsp') {
        resultConvertion = fromValue * 0.676280454;
      }
      if (toType == 'oz') {
        resultConvertion = fromValue * 0.338140227;
      }
    }
    if (fromType == 'dl') {
      if (toType == 'cup') {
        resultConvertion = fromValue * 0.422675284;
      }
      if (toType == 'gr') {
        resultConvertion = fromValue * 100;
      }
      if (toType == 'tblsp') {
        resultConvertion = fromValue * 6.76280454;
      }
      if (toType == 'oz') {
        resultConvertion = fromValue * 3.38140227;
      }
      if (toType == 'cl') {
        resultConvertion = fromValue * 10;
      }
    }
    if (fromType == 'cup') {
      if (toType == 'gr') {
        if (cupOrTblspToXIngredients == 'Butter') {
          resultConvertion = fromValue * 227;
        }
        if (cupOrTblspToXIngredients == 'All-purpose Flour and Confectioners\' Sugar') {
          resultConvertion = fromValue * 128;
        }
        if (cupOrTblspToXIngredients == 'Bread Flour') {
          resultConvertion = fromValue * 136;
        }
        if (cupOrTblspToXIngredients == 'Rolled Oats') {
          resultConvertion = fromValue * 85;
        }
        if (cupOrTblspToXIngredients == 'White Sugar') {
          resultConvertion = fromValue * 201;
        }
        if (cupOrTblspToXIngredients == 'Packed Brown Sugar') {
          resultConvertion = fromValue * 220;
        }
        if (cupOrTblspToXIngredients == 'Honey, Molasses, Syrup') {
          resultConvertion = fromValue * 340;
        }
      }
      if (toType == 'tblsp') {
        if (cupOrTblspToXIngredients == 'Butter') {
          resultConvertion = fromValue * 16;
        }
        if (cupOrTblspToXIngredients == 'All-purpose Flour and Confectioners\' Sugar') {
          resultConvertion = fromValue * 16;
        }
        if (cupOrTblspToXIngredients == 'Bread Flour') {
          resultConvertion = fromValue * 8;
        }
        if (cupOrTblspToXIngredients == 'Rolled Oats') {
          resultConvertion = fromValue * 16;
        }
        if (cupOrTblspToXIngredients == 'White Sugar') {
          resultConvertion = fromValue * 8;
        }
        if (cupOrTblspToXIngredients == 'Packed Brown Sugar') {
          resultConvertion = fromValue * 13;
        }
        if (cupOrTblspToXIngredients == 'Honey, Molasses, Syrup') {
          resultConvertion = fromValue * 16;
        }
      }
      if (toType == 'oz') {
        if (cupOrTblspToXIngredients == 'Butter') {
          resultConvertion = fromValue * 8;
        }
        if (cupOrTblspToXIngredients == 'All-purpose Flour and Confectioners\' Sugar') {
          resultConvertion = fromValue * 4.5;
        }
        if (cupOrTblspToXIngredients == 'Bread Flour') {
          resultConvertion = fromValue * 4.8;
        }
        if (cupOrTblspToXIngredients == 'Rolled Oats') {
          resultConvertion = fromValue * 3;
        }
        if (cupOrTblspToXIngredients == 'White Sugar') {
          resultConvertion = fromValue * 7.1;
        }
        if (cupOrTblspToXIngredients == 'Packed Brown Sugar') {
          resultConvertion = fromValue * 7.75;
        }
        if (cupOrTblspToXIngredients == 'Honey, Molasses, Syrup') {
          resultConvertion = fromValue * 12;
        }
      }
      if (toType == 'cl') {
        if (cupOrTblspToXIngredients == 'Butter') {
          resultConvertion = fromValue * 26.68;
        }
        if (cupOrTblspToXIngredients == 'All-purpose Flour and Confectioners\' Sugar') {
          resultConvertion = fromValue * 12.5;
        }
        if (cupOrTblspToXIngredients == 'Bread Flour') {
          resultConvertion = fromValue * 12.7;
        }
        if (cupOrTblspToXIngredients == 'Rolled Oats') {
          resultConvertion = fromValue * 9;
        }
        if (cupOrTblspToXIngredients == 'White Sugar') {
          resultConvertion = fromValue * 12.5;
        }
        if (cupOrTblspToXIngredients == 'Packed Brown Sugar') {
          resultConvertion = fromValue * 20;
        }
        if (cupOrTblspToXIngredients == 'Honey, Molasses, Syrup') {
          resultConvertion = fromValue * 34;
        }
      }
      if (toType == 'dl') {
        if (cupOrTblspToXIngredients == 'Butter') {
          resultConvertion = fromValue * 2.668;
        }
        if (cupOrTblspToXIngredients == 'All-purpose Flour and Confectioners\' Sugar') {
          resultConvertion = fromValue * 1.25;
        }
        if (cupOrTblspToXIngredients == 'Bread Flour') {
          resultConvertion = fromValue * 1.27;
        }
        if (cupOrTblspToXIngredients == 'Rolled Oats') {
          resultConvertion = fromValue * 0.9;
        }
        if (cupOrTblspToXIngredients == 'White Sugar') {
          resultConvertion = fromValue * 1.25;
        }
        if (cupOrTblspToXIngredients == 'Packed Brown Sugar') {
          resultConvertion = fromValue * 2;
        }
        if (cupOrTblspToXIngredients == 'Honey, Molasses, Syrup') {
          resultConvertion = fromValue * 3.4;
        }
      }
    }
    if (fromType == 'gr') {
      if (toType == 'tblsp') {
        resultConvertion = fromValue * 0.06666666666666667;
      }
      if (toType == 'oz') {
        resultConvertion = fromValue * 0.0352739619;
      }
      if (toType == 'cl') {
        resultConvertion = fromValue * 0.1;
      }
      if (toType == 'dl') {
        resultConvertion = fromValue * 0.01
      }
      if (toType == 'cup') {
        resultConvertion = fromValue * 0.0042267528198649;
      }
    }
    if (fromType == 'tblsp') {
      if (toType == 'oz') {
        if (cupOrTblspToXIngredients == 'Butter') {
          resultConvertion = fromValue * 0.50000841;
        }
        if (cupOrTblspToXIngredients == 'All-purpose Flour and Confectioners\' Sugar') {
          resultConvertion = fromValue * 4.409245248;
        }
        if (cupOrTblspToXIngredients == 'Bread Flour') {
          resultConvertion = fromValue * 4.47979317;
        }
        if (cupOrTblspToXIngredients == 'Rolled Oats') {
          resultConvertion = fromValue * 3.17465658;
        }
        if (cupOrTblspToXIngredients == 'White Sugar') {
          resultConvertion = fromValue * 4.40924524;
        }
        if (cupOrTblspToXIngredients == 'Packed Brown Sugar') {
          resultConvertion = fromValue * 7.05479239;
        }
        if (cupOrTblspToXIngredients == 'Honey, Molasses, Syrup') {
          resultConvertion = fromValue * 11.99314706;
        }
      }
      if (toType == 'cl') {
        if (cupOrTblspToXIngredients == 'Butter') {
          resultConvertion = fromValue * 1.4175;
        }
        if (cupOrTblspToXIngredients == 'All-purpose Flour and Confectioners\' Sugar') {
          resultConvertion = fromValue * 0.8125;
        }
        if (cupOrTblspToXIngredients == 'Bread Flour') {
          resultConvertion = fromValue * 0.8255;
        }
        if (cupOrTblspToXIngredients == 'Rolled Oats') {
          resultConvertion = fromValue * 0.5625;
        }
        if (cupOrTblspToXIngredients == 'White Sugar') {
          resultConvertion = fromValue * 0.8125;
        }
        if (cupOrTblspToXIngredients == 'Packed Brown Sugar') {
          resultConvertion = fromValue * 1.3;
        }
        if (cupOrTblspToXIngredients == 'Honey, Molasses, Syrup') {
          resultConvertion = fromValue * 2.125;
        }
      }
      if (toType == 'dl') {
        if (cupOrTblspToXIngredients == 'Butter') {
          resultConvertion = fromValue * 0.14175;
        }
        if (cupOrTblspToXIngredients == 'All-purpose Flour and Confectioners\' Sugar') {
          resultConvertion = fromValue * 0.08125;
        }
        if (cupOrTblspToXIngredients == 'Bread Flour') {
          resultConvertion = fromValue * 0.08255;
        }
        if (cupOrTblspToXIngredients == 'Rolled Oats') {
          resultConvertion = fromValue * 0.05625;
        }
        if (cupOrTblspToXIngredients == 'White Sugar') {
          resultConvertion = fromValue * 0.08125;
        }
        if (cupOrTblspToXIngredients == 'Packed Brown Sugar') {
          resultConvertion = fromValue * 0.13;
        }
        if (cupOrTblspToXIngredients == 'Honey, Molasses, Syrup') {
          resultConvertion = fromValue * 0.2125;
        }
      }
      if (toType == 'cup') {
        if (cupOrTblspToXIngredients == 'Butter') {
          resultConvertion = fromValue * 0.0625;
        }
        if (cupOrTblspToXIngredients == 'All-purpose Flour and Confectioners\' Sugar') {
          resultConvertion = fromValue * 0.0625;
        }
        if (cupOrTblspToXIngredients == 'Bread Flour') {
          resultConvertion = fromValue * 0.0635;
        }
        if (cupOrTblspToXIngredients == 'Rolled Oats') {
          resultConvertion = fromValue * 0.0625;
        }
        if (cupOrTblspToXIngredients == 'White Sugar') {
          resultConvertion = fromValue * 0.0625;
        }
        if (cupOrTblspToXIngredients == 'Packed Brown Sugar') {
          resultConvertion = fromValue * 0.1;
        }
        if (cupOrTblspToXIngredients == 'Honey, Molasses, Syrup') {
          resultConvertion = fromValue * 0.0625;
        }
      }
      if (toType == 'gr') {
        if (cupOrTblspToXIngredients == 'Butter') {
          resultConvertion = fromValue * 14.175;
        }
        if (cupOrTblspToXIngredients == 'All-purpose Flour and Confectioners\' Sugar') {
          resultConvertion = fromValue * 14.1875;
        }
        if (cupOrTblspToXIngredients == 'Bread Flour') {
          resultConvertion = fromValue * 17;
        }
        if (cupOrTblspToXIngredients == 'Rolled Oats') {
          resultConvertion = fromValue * 5.625;
        }
        if (cupOrTblspToXIngredients == 'White Sugar') {
          resultConvertion = fromValue * 25.125;
        }
        if (cupOrTblspToXIngredients == 'Packed Brown Sugar') {
          resultConvertion = fromValue * 16.923076923076923;
        }
        if (cupOrTblspToXIngredients == 'Honey, Molasses, Syrup') {
          resultConvertion = fromValue * 21.25;
        }
      }
    }
    console.log(resultConvertion);
    return resultConvertion;
  }

}

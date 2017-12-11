import { InMemoryDbService} from "angular-in-memory-web-api";


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const typesOfDishes = [
      {id: 0, name: 'Appetizer'},
      {id: 1, name: 'Soup'},
      {id: 2, name: 'Main Dish'},
      {id: 3, name: 'Dessert'},
      {id: 4, name: 'Aperitif'}
    ];

    const appetizer = [
      {id: 10, name: 'Sweet Dinner Rolls'}
    ];

    const soup = [
      {id: 20, name: 'Chicken Noodle Soup'},
      {id: 21, name: 'Vegetable Soup'},
      {id: 22, name: 'Vegetarian Soup'},
      {id: 22, name: 'Italian Wedding Soup with Turkey Meatballs'}
    ];

    const mainDish = [
      {id: 30, name: 'Chicken Cordon Bleu II'},
      {id: 31, name: 'Chicken Marsala'},
      {id: 32, name: 'Italian Spaghetti Sauce with Meatballs'}
    ];

    const dessert = [
      {id: 40, name: 'Fluffy Pancakes'},
      {id: 41, name: 'Good Old Fashioned Pancakes'},
      {id: 42, name: 'Best Brownies'},
      {id: 43, name: 'Too Much Chocolate Cake'},
      {id: 44, name: 'Sloppy Joes II'},
      {id: 45, name: 'Waffles'}

    ];

    const aperitif = [
      {id: 50, name: 'Cucumber Cocktail with Chamomile Tonic'},
      {id: 51, name: 'Sparkling Cranberry Splash'}
    ];

    const dishes = [
    ];
    return {typesOfDishes, appetizer, soup, mainDish, dessert, aperitif, dishes};
  }
}

class Cocktail {
    constructor(name, ingredients, isAlcohol, type) {
        this.name = name; // instance property
        this.ingredients = ingredients;
        this.isAlcohol = isAlcohol;
        this.type = type;
    }
    getPrice() { // methods of prototype
        return this.ingredients.reduce(function(sum, ingredient) {
            return sum + ingredient.price
        }, 0)
    }
};

class CocktailsList {
    constructor() {
        this.list = []
    }

    add(cocktail) {
        this.list.push(cocktail)
    }
    remove(cocktail) {
        this.list.splice(this.list.indexOf(cocktail), 1);
    }
    getAlcohol() {
        return this.list.filter(item => item.isAlcohol === true);
    }
    getNonAlcohol() {
        return this.list.filter(item => item.isAlcohol === false);
    }

    getAll() {
        return this.list;
    }
    render() {
        return this.list.map(function(item) {
            return `<div>${item.name}</div>`;
        }).join('');
    }
}
let margarita = new Cocktail('Margarita', [{
    name: 'Vodka',
    price: 10
}, {
    name: 'Water',
    price: 50
}], true, 'long');

let drinksList = new CocktailsList();

drinksList.add(new Cocktail('Long Island', [{
    name: 'Tequila',
    price: 100
}, {
    name: 'Lime',
    price: 500
}], false, 'Short Drinks'));

drinksList.add(new Cocktail('Zombie', [{
    name: 'Tequila',
    price: 100
}, {
    name: 'Lime',
    price: 500
}], false, 'Short Drinks'));

drinksList.add(new Cocktail('B-45', [{
    name: 'Tequila',
    price: 100
}, {
    name: 'Lime',
    price: 500
}], true, 'Short Drinks'));

drinksList.add(margarita);

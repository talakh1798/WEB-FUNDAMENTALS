function PizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}
var pizza1 = PizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);
var pizza2 = PizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);
var pizza3 = PizzaOven("Flatbread", "tomato sauce", ["cheddar"], ["Roast beef ", "pepper", "onion"]);
console.log(pizza3);
var pizza4 = PizzaOven("Gluten-Free", "pesto", ["Goat cheese", "feta"], ["tomato slides","grilled chicken","pepper"]);
console.log(pizza4);
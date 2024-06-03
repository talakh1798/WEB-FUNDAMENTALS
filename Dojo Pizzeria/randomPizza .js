function randomPizza() {
    var crustType = ["deep dish", "hand tossed", "Flatbread", "Gluten-Free"];
    var sauceType = ["traditional", "marinara", "tomato sauce", "pesto"];
    var cheeses = ["mozzarella", "feta", "cheddar", "Goat cheese"];
    var toppings = ["pepperoni", "sausage", "Roast beef", "pepper", "onion"];

    var pizzaRandom = [];

    var array = [crustType, sauceType, cheeses, toppings];
    for (i = 0; i < array.length; i++) {
        var randomIndex = Math.floor(Math.random() * array[i].length);
        pizzaRandom.push(array[i][randomIndex]);
    }


    var pizza = {
        crust: pizzaRandom[0],
        sauce: pizzaRandom[1],
        cheese: pizzaRandom[2],
        topping: pizzaRandom[3],
    };

    return pizza;
}

console.log(randomPizza());

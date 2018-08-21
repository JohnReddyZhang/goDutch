let mongoose = new require('mongoose'),
    restaurantInfo = require('./models/restaurant'),
    dish = require('./models/dish');

let data = [
    {
        name: "First Restaurant",
        cuisine: "New American",
        tableCount: 20,
        address: "new street",
        firstName: "John",
        lastName: "Corner",
        username: "jcor@a.com"
    },
    {
        name: "Second Restaurant",
        cuisine: "New American",
        tableCount: 20,
        address: "new street",
        firstName: "John",
        lastName: "Corner",
        username: "jcor@a.com"
    },
    {
        name: "Third Restaurant",
        cuisine: "New American",
        tableCount: 20,
        address: "new street",
        firstName: "John",
        lastName: "Corner",
        username: "jcor@a.com"
    },
];

let dishData = {
    name: 'Ratatouille',
    price: 15.99,
    description: 'delicious dish, featured in our Restaurant',
    picture: 'https://media.chefdehome.com/740/0/0/ratatouille/ratatouille-casserole.jpg',
    type: 'Entree'
};

function seedDB() {
    // remove restaurants
    restaurantInfo.remove({}, function (err) {
        if (err) {
            console.log("Error at removing restaurants:\n" + err)
        }
        console.log("removed restaurants.");
        // remove dishes.
        dish.remove({}, function (err) {
            if (err) {
                console.log("Error at removing dishes:\n" + err)
            }
            console.log("removed dishes.");
            data.forEach(function (seed) {
                restaurantInfo.create(seed, function (err, restaurant) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('added a restaurant');
                        console.log(restaurant.name);
                        // Add 1 dish to restaurant
                        dish.create(dishData, function (err, dish) {
                            if (err) {
                                console.log(err)
                            } else {
                                restaurant.dishes.push(dish);
                                restaurant.save();
                                console.log('added a new dish')
                            }
                        })
                    }
                })
            })
        });
    });
}

module.exports = seedDB;
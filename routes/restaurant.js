const express = require('express'),
    router = express.Router();

let dish = require('../models/dish.js');
let restaurantInfo = require('../models/restaurant.js');
require('mongoose-type-email');


// Index Route - Restaurant
router.get('/restaurants', function (req, res) {
    restaurantInfo.find({}, function (err, allRestaurants) {
        if (err) {
            console.log("Error!" + err);
        } else {
            res.render('restaurant/restaurant-index', {restaurants: allRestaurants});
        }
    });
});

// New Route - restaurant
router.get('/restaurants/join', function (req, res) {
    res.render('restaurant/restaurant-join');
});

// Success Page
router.get('/restaurants/success', function (req, res) {
    res.render('restaurant/restaurant-success');
});

// Create Route - restaurant
router.post('/restaurants', function (req, res) {
    console.log("Received a post request for new restaurant.");
    console.log(req.body.restaurant);
    //TODO: Need phone number & floor plan (file)
    restaurantInfo.create(req.body.restaurant, function (err, newRest) {
        if (err) {
            console.log("ERROR:\n" + err)
        } else {
            res.render("restaurant/restaurant-success", {restaurant: newRest});
        }
    });
});

// Show Route - restaurant
router.get('/restaurants/:id', function (req, res) {
    restaurantInfo.findById(req.params.id).populate('dishes').exec(function (err, restaurantFound) {
        if (err) {
            console.log(err);
            res.redirect('/restaurants')
        } else {
            console.log(restaurantFound);
            res.render('restaurant/restaurant-show', {restaurant: restaurantFound});
        }
    });
});

module.exports = router;
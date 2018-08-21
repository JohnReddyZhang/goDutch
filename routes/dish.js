const express = require('express'),
    router = express.Router();

let dish = require('../models/dish.js');
let restaurantInfo = require('../models/restaurant');


// NEW Dish item
router.get('/restaurants/:id/dish/new', function (req, res) {
    restaurantInfo.findById(req.params.id, function (err, restaurant) {
        if (err) {
            console.log(err)
        } else {
            res.render('dish/new', {restaurant: restaurant});
        }

    })
});

// CREATE Dish item
router.post('/restaurants/:id/dish', function (req, res) {
    restaurantInfo.findById(req.params.id, function (err, restaurant) {
        if (err) {
            console.log(err);
            res.redirect("error")
        } else {
            dish.create(req.body.dish, function (err, dish) {
                if (err) {
                    console.log(err);
                    res.redirect('error')
                } else {
                    restaurant.dishes.push(dish);
                    restaurant.save();
                    res.redirect('/restaurants/' + restaurant._id);
                }
            })
        }
    })

});


module.exports = router;



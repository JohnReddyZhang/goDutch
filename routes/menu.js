const express = require('express'),
    router = express.Router();

let menu = require('../models/menu.js');
let restaurantInfo = require('../models/restaurant');


// NEW Menu item
router.get('/restaurants/:id/menu/new', function (req, res) {
    restaurantInfo.findById(req.params.id, function (err, restaurant) {
        if (err) {
            console.log(err)
        } else {
            res.render('menu/new', {restaurant: restaurant});
        }

    })
});

// CREATE Menu item


module.exports = router;



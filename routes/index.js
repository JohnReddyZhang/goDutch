const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('index')
});

router.get('/new', function (req, res) {
    res.render('new');
});

router.get('/session', function (req, res) {
    res.render('session');
});

router.get('/restaurant-owner', function (req, res) {
    res.render('restaurant-owner')
});


// New restaurant registration route
router.get('/restaurant', function (req, res) {
    console.log("restaurant page");
    res.render("restaurant");
});

// Restaurant List, for displaying all restaurants.
router.get('/restaurant-list', function (req, res) {
    let restaurants = [
        {name: "Five Star Gourmet", location: "1 N Michigan Ave", rating: "5"},
        {name: "Local Grow Best", location: "500 Wabash Ave", rating: "4.5"}
    ];
    res.render('restaurant-list', {restaurants: restaurants});
});

console.log("index.js is loading");
module.exports = router;

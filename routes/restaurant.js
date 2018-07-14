const express = require('express');
const router = express.Router();

// New Route - restaurant
router.get('/restaurants/join', function (req, res) {
    res.render('restaurant-join');
});

// Success Page
router.get('/restaurants/success', function (req, res) {
    res.render('restaurant-success');
});

// Show Route - restaurant
router.get('/restaurants/:id', function (req, res) {
    res.send("This is the show route")
});

// Create Route - restaurant
router.post('/restaurants', function (req, res) {
    console.log("Received a post request.");
    console.log(req.body.restaurant);
    res.redirect('/restaurants/success');
});
module.exports = router;
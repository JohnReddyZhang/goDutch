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

// // Show Route - restaurant
// router.get('/restaurants/:id', function (req, res) {
//     res.send("This is the show route")
// });

// // Create Route - restaurant
// router.post('/restaurants', function (req, res) {
//     console.log("Received a post request for new restaurant.");
//     let Name = req.body.restaurant.restaurantNname,
//         Table = req.body.restaurant.table,
//         Address = req.body.restaurant.address,
//         FirstName = req.body.restaurant.firstName,
//         LastName = req.body.restaurant.lastName,
//         username = req.body.restaurant.username;
//         //TODO: Need phone number & floor plan (file)
//     let newRestaurant = {Name: Name,
//         Table: Table,
//         Address: Address,
//         FirstName: FirstName,
//         LastName: LastName,
//         username: username};
//
//     console.log(Name);
// });
module.exports = router;
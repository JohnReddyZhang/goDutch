const express = require('express');
const router = express.Router();

// Supposedly route: New - user
router.get('/user/join', function (req, res) {
    res.render('new-user');
});

// Need Create Route.


// // New Route - user
// router.get('/restaurants/join', function (req, res) {
//     res.render('restaurant-join');
// });
//
// // Show Route - user
// router.get('/restaurants/:id', function (req, res) {
//     res.send("This is the show route")
// });
//
// // Create Route - user
// router.post('/restaurants', function (req, res) {
//     console.log("Received a post request.");
//     console.log(req.body.restaurant);
//     res.redirect('/restaurants/success');
// });

module.exports = router;
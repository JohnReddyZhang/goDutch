const express = require('express');
const router = express.Router();


router.get('/restaurant-list/join', function (req, res) {
    res.redirect('/restaurant-join');
});

router.post('/restaurant-list', function (req, res) {
    console.log("Received a post request.");
    console.log(req.body.restaurant);
    res.redirect('/restaurant-list/success');
});

router.get('/restaurant-list/success', function (req, res) {
    res.render('restaurant-success');

});
module.exports = router;
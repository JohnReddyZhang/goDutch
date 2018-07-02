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

console.log("index.js is loading");
module.exports = router;

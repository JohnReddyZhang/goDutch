const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require("method-override");
// const expressSanitizer = require('express-sanitizer');
// Mongodb
const mongoose = new require('mongoose'); //TODO: WARNING: used "new" here to avoid some warnings in IDE.
require('mongoose-type-email');

const app = express();
app.set('views', path.join(__dirname, 'views')); // 设置存放模板文件的目录
app.set('view engine', 'ejs'); // 设置模板引擎为 ejs
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

mongoose.connect("mongodb://localhost:27017/restaurants", {useNewUrlParser: true});


// Models
const restaurantInfo = require('./models/restaurant');

// Routers
const indexRouter = require('./routes/index');
// const userRouter = require('./routes/users'); // Not used.
const restaurantRouter = require('./routes/restaurant');
const userRouter = require('./routes/user');

//app.use(express.static("/public"));
app.use(indexRouter);
app.use(restaurantRouter);
app.use(userRouter);


// // TODO: Refactor back to restaurant.js
// // Moved to restaurant.js (not yet)
// // Index Route - Restaurant
// app.get('/restaurants', function (req, res) {
//     restaurantInfo.find({}, function (err, allRestaurants) {
//         if (err) {
//             console.log("Error!" + err);
//         } else {
//             res.render('restaurant-index', {restaurants: allRestaurants});
//         }
//     });
// });
//
// // Create Route - restaurant
// app.post('/restaurants', function (req, res) {
//     console.log("Received a post request for new restaurant.");
//     console.log(req.body.restaurant);
//     //TODO: Need phone number & floor plan (file)
//     restaurantInfo.create(req.body.restaurant, function (err, newRest) {
//         if (err) {
//             console.log("ERROR:\n" + err)
//         } else {
//             res.render("restaurant-success", {restaurant: newRest});
//         }
//     });
// });
//
// // Show Route - restaurant
// app.get('/restaurants/:id', function (req, res) {
//     restaurantInfo.findById(req.params.id, function (err, restaurantFound) {
//         if (err) {
//             console.log(err);
//             res.redirect('/restaurants')
//         } else {
//             res.render('restaurant-show', {restaurant: restaurantFound});
//         }
//     });
//
// });


app.listen(process.env.PORT, () => console.log(`listening ${process.env.PORT}`));

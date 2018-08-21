let mongoose = require('mongoose');

let dishSchema = new mongoose.Schema({
    // cuisine: String,
    name: String,
    price: Number,
    description: String,
    picture: String, // For dish pic url
    type: String
});

let dish = mongoose.model('Dish', dishSchema);
//
module.exports = dish;

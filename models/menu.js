let mongoose = require('mongoose');

let menuSchema = new mongoose.Schema({
    // cuisine: String,
    dishes: [{
        name: String,
        price: Number,
        description: String,
        picture: String
    }]
});

let menu = mongoose.model('Menu', menuSchema);
//
module.exports = menu;

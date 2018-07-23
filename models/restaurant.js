let mongoose = require("mongoose");

let restaurantInfoSchema = new mongoose.Schema({
    name: String,
    tableCount: Number,
    address: String,
    firstName: String,
    lastName: String,
    username: mongoose.SchemaTypes.Email
});

let restaurantInfo = mongoose.model('Restaurant', restaurantInfoSchema);
//
module.exports = restaurantInfo;

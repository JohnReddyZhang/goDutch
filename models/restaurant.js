let mongoose = require("mongoose");

let restaurantInfoSchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    tableCount: Number,
    address: String,
    firstName: String,
    lastName: String,
    username: mongoose.SchemaTypes.Email,
    menu: {type: mongoose.Schema.Types.ObjectId, ref: "menu"}
});

let restaurantInfo = mongoose.model('Restaurant', restaurantInfoSchema);
//
module.exports = restaurantInfo;

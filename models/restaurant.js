let mongoose = require("mongoose");

let restaurantInfoSchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    tableCount: Number,
    address: String,
    firstName: String,
    lastName: String,
    username: mongoose.SchemaTypes.Email,
    dishes: [
        {type: mongoose.Schema.Types.ObjectId, ref: "Dish"}
    ]
});

let restaurantInfo = mongoose.model('Restaurant', restaurantInfoSchema);
//
module.exports = restaurantInfo;

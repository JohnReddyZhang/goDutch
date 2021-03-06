const path = require('path'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require("method-override"),
// const expressSanitizer = require('express-sanitizer');
// Mongodb
    mongoose = new require('mongoose'); //TODO: WARNING: used "new" here to avoid some warnings in IDE.
require('mongoose-type-email');

// For seeding the database, due to remove when finished.
const seedDB = require('./seeding');

seedDB();

app.set('views', path.join(__dirname, 'views')); // 设置存放模板文件的目录
app.set('view engine', 'ejs'); // 设置模板引擎为 ejs
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

mongoose.connect("mongodb://localhost:27017/restaurants", {useNewUrlParser: true});

// Routers
const indexRouter = require('./routes/index');
const dishRouter = require('./routes/dish');
// const userRouter = require('./routes/users'); // Not used.
const restaurantRouter = require('./routes/restaurant');
const userRouter = require('./routes/user');

//app.use(express.static("/public"));
app.use(indexRouter);
app.use(dishRouter);
app.use(restaurantRouter);
app.use(userRouter);


app.listen(process.env.PORT, () => console.log(`listening ${process.env.PORT}`));

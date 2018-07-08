const path = require('path');
const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');


app.set('views', path.join(__dirname, 'views')); // 设置存放模板文件的目录
app.set('view engine', 'ejs'); // 设置模板引擎为 ejs
app.use(express.static(__dirname + "/public"));
//app.use(express.static("/public"));
app.use('/', indexRouter);
app.use('/users', userRouter);


app.listen(process.env.PORT, () => console.log(`listening ${process.env.PORT}`));

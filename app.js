//Modules
var express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//db connection
mongoose.connect(process.env.DB_CON, ()=> console.log('MongoDB Atlas connection successful'));

//Routes
var indexRouter = require('./routes/index');
var postsRouter = require('./routes/posts');

//Express Server
var app = express();


app.use('/', indexRouter);
app.use('/posts', postsRouter);


app.listen(3000, () => console.log('ThreePointSix API listening on port 3000'))
module.exports = app;

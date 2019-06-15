//Modules
var express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//db connection
mongoose.connect(process.env.DB_CON, (err) => {
    if (!err){
        console.log('Connected to MongoDB atlas');
    }
    else {
        console.log(err);
    }
});

//Routes
var indexRouter = require('./routes/index');
var postsRouter = require('./routes/posts');

//Express Server
var app = express();

app.use(express.json())

//Catch routes
app.use('/', indexRouter);
app.use('/posts', postsRouter);


app.listen(3000, () => console.log('ThreePointSix API listening on port 3000'))
module.exports = app;

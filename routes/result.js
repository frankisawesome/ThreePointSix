//Imports
const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//Information route
router.get('/', (req, res) => {
    res.json({
        message: "Hit a specific results endpoint with a get request to obtain desired sorted results",
        schema: {
            time: "A string type of year/month/week/day",
            data: "An array of length 10 containing the top ten messages posted in the desired timeframes"
        }
    })
})

//Queries the database and store all messages in an array, pass to next middleware
router.get('/toptenposts', (req, res) => {
    Post.find(function (err, posts) { //use the mongoose find function for db query
        if (err) return console.error(err); //log any error
        const data = [];
        posts.map((doc) => {
            data.push(doc.message) //only take messages
        })

        //Count the number of occurences for duplicate messages
        const objArr = TopTen(data);
        const result = [];

        //If there are less than 10 messages then return all of them
        if (objArr.length < 10) {
            objArr.map((obj) => {
                result.push(obj.data);
            })
        }
        //Else use only the top ten results
        else {
            for (let i = 0; i < 10; i++) {
                result.push(objArr[i].data)
            }
        }
        res.send(result);
    })
})

//Function that takes an array of strings, count the number of duplicates and return objects with the count and the message
function TopTen(array) {
    array.sort();

    const objArr = [];
    let current = null;
    let count = 0;

    //Find the count for all messages and store the count and message as objects in a new array
    for (var i = 0; i <= array.length; i++) {
        if (array[i] != current) {
            if (count > 0) {
                objArr.push({
                    data: current,
                    count: count
                })
            }
            current = array[i];
            count = 1;
        } else {
            count++;
        }
    }

    //Sort the new array based on count and take the top ten items
    objArr.sort((a, b) => (a.count > b.count) ? 1 : -1);

    objArr.reverse();

    return objArr;
}

module.exports = router;

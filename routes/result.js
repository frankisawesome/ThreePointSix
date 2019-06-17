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

router.get('/toptenposts', (req, res) => {
    Post.find(function (err, posts) {
        if (err) return console.error(err);
        const data = [];
        posts.map((doc) => {
            data.push(doc.message)
        })
        res.json({
            data: data
        })
    })
})

module.exports = router;

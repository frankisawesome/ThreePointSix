//Imports
const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//Information route for schema information
router.get('/', (req, res) => {
  res.json({
    "message": "Hit the /posts/new endpoint with a post request using the following schema",
    "bodySchema": {
      "userId": "A string, required",
      "message": "A string, required",
      "Date": "A Date object, default = Data.now()"
    }
  });
});

//Post route for new message creation
router.post('/new', async (req, res) => {
  const post = new Post({
    userId: req.body.userId,
    message: req.body.message
  })
  try {
    const posted = await post.save();
    res.send({ "message": "success", "posted": posted })
  } catch (err) {
    res.send({ "message": err })
  }
})

module.exports = router;

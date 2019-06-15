//Imports
const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', function(req, res) {
  res.json({
    "message": "His this endpoint with a post request using the following schema",
    "bodySchema": {
      "userId": "String",
      "message": "String",
      "Date": "Date"
    }
  });
});

router.post('/', async (req,res) => {
  const post = new Post({
    userId: req.body.userId,
    message: req.body.message
  })
  try{
    const posted = await post.save();
    res.send({"message": "success", "posted": posted})
  }catch(err){
    res.send({"message":err})
  }
})

module.exports = router;

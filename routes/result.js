//Imports
const express = require('express');
const router = express.Router();

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

router.get('/$time', (req, res) => {
    
})

module.exports = router;

const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    message: {
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Posts', MessageSchema)
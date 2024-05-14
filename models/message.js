const moongose = require('mongoose')

const message = new moongose.Schema({
    name: String,
    message: String,
    phoneNumber: Number,
})

const Message = moongose.model('message', message)

module.exports = Message
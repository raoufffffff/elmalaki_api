const moongose = require('mongoose')

const orderitem = new moongose.Schema({
    name: String,
    price: Number,
    state: String,
    aderss: String,
    orders: [],
    phoneNumber: Number,
    active: Boolean
})

const Order = moongose.model('orderitem', orderitem)

module.exports = Order
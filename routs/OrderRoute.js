const experss = require('express')
const Order = require('../models/Order')
const OrderRoute = experss.Router()


OrderRoute.get('/', async (req, res) => {
    try {
        const result = await Order.find()
        res.status(200).send({ data: result, length: result.length })
    } catch (error) {
        res.status(404).send({ error: error })
    }
})

OrderRoute.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const result = await Order.findById(id)
        res.status(200).send({ data: result, length: result.length })
    } catch (error) {
        res.status(404).send({ error: error })
    }
})

OrderRoute.put('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        const result = await Order.findByIdAndUpdate(id, body)
        res.status(200).send({ data: result, length: result.length, post: true })
    } catch (error) {
        res.status(404).send({ error: error })
    }
})

OrderRoute.post('/', async (req, res) => {
    const { body } = req
    try {
        const result = await Order.create(body)
        res.status(200).send({ data: result, length: result.length, post: true })
    } catch (error) {
        console.log(error.message);
        res.status(404).send({ error: error })
    }
})

module.exports = OrderRoute



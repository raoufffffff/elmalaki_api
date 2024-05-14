const experss = require('express')
const Message = require('../models/message')
const MessageRoute = experss.Router()

MessageRoute.get('/', async (req, res) => {
    try {
        const result = await Message.find()
        res.status(200).send({ data: result, length: result.length })
    } catch (error) {
        res.status(404).send({ error: error })
    }
})

MessageRoute.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const result = await Message.findById(id)
        res.status(200).send({ data: result, length: result.length })
    } catch (error) {
        res.status(404).send({ error: error })
    }
})

MessageRoute.post('/', async (req, res) => {
    const { body } = req
    try {
        const result = await Message.create(body)
        res.status(200).send({ data: result, length: result.length, post: true })
    } catch (error) {
        console.log(error.message);
        res.status(404).send({ error: error })
    }
})

module.exports = MessageRoute
const experss = require("express")
const mongoose = require("mongoose")
const itemRoute = require("./routs/ItemRoute")
const cors = require("cors")
const OrderRoute = require("./routs/OrderRoute")
const MessageRoute = require("./routs/MessageRoute")
const app = experss()

app.use(cors());
app.use(experss.json())

app.use('/order', OrderRoute)
app.use('/message', MessageRoute)
app.use('/', itemRoute)


app.listen("5000")



mongoose
    .connect('mongodb+srv://raouf:raouf@cluster0.ylmy8ks.mongodb.net/')
    .then(() => {
        console.log("mriglla")

    })
    .catch(err => console.log(err))
const express = require('express');

// const hbs = require('hbs');
const OrderModel = require('./models/OrderModel')

const orderRoute = require('./routes/order')
const adminRoute = require('./routes/admin')

const mongoose = require("mongoose");

require("dotenv").config();

const cors = require("cors");

// const routes = require('./routes/routes.js');

const db = require('./models/db.js');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
app.use(cors());
// app.use(
//     cors({
//         origin: [],
//         methods: ["GET", "POST", "PATCH", "DELETE"],
//     })
// );

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});



app.use("/api/orders", orderRoute)
app.use("/api/updateOrderStatus/", orderRoute)
app.use("/api/updateLimit", adminRoute)


db.connect();



app.listen(port, function(){
    console.log('Server running at: ');
    console.log('app listening at port ' + port);
});
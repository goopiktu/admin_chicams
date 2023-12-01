const express = require('express');

const OrderModel = require('./models/OrderModel');

const orderRoute = require('./routes/order');
const adminRoute = require('./routes/admin');
const settingRoute = require('./routes/setting');

const mongoose = require("mongoose");

require("dotenv").config();

const cors = require("cors");

const db = require('./models/db.js');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
app.use(cors());

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});



app.use("/api/orders", orderRoute);
app.use("/api/updateOrderStatus/", orderRoute);
app.use("/api/updateLimit", adminRoute);
app.use("/api/submitContact", settingRoute);
app.use("/api/getContacts", settingRoute);


db.connect();



app.listen(port, function(){
    console.log('Server running at: ');
    console.log('app listening at port ' + port);
});
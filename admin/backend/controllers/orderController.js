const Order = require('../models/OrderModel')
const mongoose = require('mongoose')

const getOrderList = async(req, res) => {
    const orderList = await Order.find({})
    res.status(200).json(orderList)
}

const getOrderbyDate = async(req, res) => {
    const orderList = await Order.find({})
}


module.exports = {
    getOrderList
}
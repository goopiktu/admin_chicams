const Order = require('../models/OrderModel');
const mongoose = require('mongoose');

const getOrderList = async (req, res) => {
  try {
    const { date } = req.query;

    console.log(date);

    // Your logic to fetch orders based on the date...

    const orderList = await Order.find({ dateOrdered: date });

    res.status(200).json(orderList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getOrderList,
};

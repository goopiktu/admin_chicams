const Order = require('../models/OrderModel')
const mongoose = require('mongoose')

const getOrderList = async (req, res) => {
    try {
      const { date } = req.query;

      console.log(date);
      let query = {};

      if (date) {
        const startDate = new Date(date);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 1);
  
        query = {
          dateOrdered: {
            $gte: startDate,
            $lt: endDate,
          },
        };
      }
  
      const orderList = await Order.find(query);
  
      res.status(200).json(orderList);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
  getOrderList
}
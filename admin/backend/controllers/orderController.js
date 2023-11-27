const Order = require('../models/OrderModel');
const Product = require('../models/ProductModel.js');
const mongoose = require('mongoose');

const getOrderList = async (req, res) => {
  try {
    const { date } = req.query;

    // console.log(date);

    const orderList = await Order.find({ dateOrdered: date });

    res.status(200).json(orderList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateOrderStatus = async (req, res) => {
  const orderId = req.body._id;
  const newStatus = req.body.status;

  console.log(orderId);
  console.log(newStatus);

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (!['Pending', 'Accepted', 'Rejected', 'Completed'].includes(newStatus)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    order.status = newStatus;

    await order.save();

    return res.status(200).json({ message: 'Order status updated successfully', order });
  } catch (error) {
    console.error('Error updating order status:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getProduct = async (req, res) => {
  try{
    const { productName } = req.query; 

    console.log('SERVER PRODUCT NAME: ', productName); 

    const product = await Product.find({ name: productName }); 

    res.status(200).json(product);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getOrderList,
  updateOrderStatus,
  getProduct
};

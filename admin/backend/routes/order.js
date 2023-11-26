const express = require('express')

const{
    getOrderList,
    updateOrderStatus
} = require('../controllers/orderController')

const router = express.Router()

router.get('/', getOrderList)
router.patch('/', updateOrderStatus)

module.exports = router
const express = require('express')

const{
    getOrderList,
    updateOrderStatus,
    getProduct
} = require('../controllers/orderController')

const router = express.Router()

router.get('/', getOrderList) 
router.get('/getProduct', getProduct)
router.patch('/', updateOrderStatus)

module.exports = router
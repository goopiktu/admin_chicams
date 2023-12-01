const express = require('express');

const { 
    updateLimit,
} = require('../controllers/adminController');

const router = express.Router();

router.patch('/', updateLimit);

module.exports = router;

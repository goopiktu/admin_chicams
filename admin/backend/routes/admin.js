const express = require('express');


const { 
    updateLimit,
} = require('../controllers/adminController');

const router = express.Router();

// Use the PATCH method for updating the limit
router.patch('/', updateLimit);

module.exports = router;

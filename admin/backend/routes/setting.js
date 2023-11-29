const express = require('express')

const{
    submitContact,
    getContacts
} = require('../controllers/settingController')

const router = express.Router()

router.post('/', submitContact);
router.get('/', getContacts);

module.exports = router
var mongoose = require('mongoose');
// need potential fields 
// 1 that holds the images that customer will upload as reference
// 2 the email that they will use so we can send them a auto generated email
var OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   
    contactNo: {
        type: Number,
        required: true
    }, 

    fbLink: {
        type: String,
        required: true
    },

    mode: {
        type: String,
        enum: ['Deliver', 'Pick-up'],
        default: 'Pick-up',
        required: true
    },
    orderDes: {
        type: String,
        default: 'None',
        required: true
    },

    address: {
        type: String,
        default: 'Pick-Up',
        required: true
    },

    dateOrdered: {
        type: Date,
        default: Date.now,
        required: true  
    },
});

module.exports = mongoose.model('Order', OrderSchema, 'orders');
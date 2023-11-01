var mongoose = require('mongoose');
// need potential fields 
// 1 that holds the images that customer will upload as reference
// 2 the email that they will use so we can send them a auto generated email
var OrderSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },

    contactNo: {
        type: Number,
        required: true
    },
    // mode needs to be changed, needs 
    mode: {
        type: String,
        enum: ['Deliver', 'Pick-up'],
        default: 'Pick-up',
        required: true
    }, 

    dateOrdered: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema);
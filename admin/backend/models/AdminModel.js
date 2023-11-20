var mongoose = require('mongoose');

var AdminSchema = new mongoose.Schema({

    limit: {
        type: Number,
        default: 3,
    }

});

module.exports = mongoose.model('Admin', AdminSchema, 'admin');
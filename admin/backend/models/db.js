require("dotenv").config();
const mongoose = require('mongoose');

const Order = require('./OrderModel.js');

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

const database = {
    connect: async function() {
        try {
            await mongoose.connect(process.env.MONGO_URI, options);
            console.log('Connected to: ' + process.env.MONGO_URI);
        } catch (error) {
            console.error('Error connecting to database:', error);
        }
    },

};

module.exports = database;
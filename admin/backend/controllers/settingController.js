const Contact = require('../models/ContactModel.js');
const mongoose = require('mongoose'); 

const submitContact = async (req, res) => {
    try {
        const data = req.body;

        const newContact = new Contact(data);

        newContact.save()
            .then((savedContact) => {
                res.status(201).json(savedContact);
            })
            .catch((error) => {
                res.status(500).json({ error: 'An error occurred: ' + error });
            });

    } catch (error) {
        console.error(error);
    }
};

const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({});

        res.status(200).json(contacts);
    } catch (error){
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    submitContact,
    getContacts
}
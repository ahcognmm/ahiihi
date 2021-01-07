const mongo = require('./connection');
const { Schema, model } = require('mongoose');

const users = new Schema({
    fullname: {type: String, required: true},
    username: { type: String, unique: true },
    password: { type: String, required: true },
});


module.exports = model('Users', users);
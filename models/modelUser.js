'use strict'

const db = require('../config/dbConexion');
let mongoose = require('mongoose');
let schema = mongoose.Schema;


const users = new schema({
    user: {type: String},
    password: {type: String}
});


let modelUsers = db.model('users', users, 'users');

module.exports = {
    modelUsers
};
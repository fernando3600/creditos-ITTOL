'use strict'

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('dotenv').config();
const devMx = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.4au1nc0.mongodb.net/?retryWrites=true&w=majority`;
const connection = mongoose.createConnection(devMx, function (err) {
    if (err)
        console.log('Unable to connect to database', err);
    else
        console.log('Connected to database');
});

connection.on('reconnected',() => console.log('Reconectando'));
connection.on('disconnected',()=>{
  console.log('disconnected');
  throw new Exception('Se desconecto');
}); 
connection.on('connecting',() => console.log('Conectando...'));
connection.on('connected', () => console.log('Conectado'));
connection.on('open',() => console.log('Abierta'));
connection.on('close',() =>console.log('Cerrado'));

module.exports = connection;
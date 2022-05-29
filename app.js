"use strict";

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router/Router');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router);

app.listen(port, () => {
    console.log('Listen in http://localhost:' + port);
});
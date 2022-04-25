'use strict'

const db = require('../config/dbConexion');
let mongoose = require('mongoose');
let schema = mongoose.Schema;


const creditos = new schema({
    nombre: {type: String},
    numeroControl: {type: String},
    especialidad: {type: String},
    semestre: {type: String},
    resultado: {type: String}, 
    actividad: {type: String}
});


let modelCreditos = db.model('extraEscolaresCreditos', creditos, 'extraEscolaresCreditos');

module.exports = {
    modelCreditos
};
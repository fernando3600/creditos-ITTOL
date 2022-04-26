'use strict'

let buildQuery = (data) => {
    let response = {};

    if(data){
        data.nombre != "null" ? response.nombre = new RegExp(data.nombre, 'gi') : '';
        data.numeroControl != "null" ? response.numeroControl = new RegExp(data.numeroControl, 'gi') : '';
        data.especialidad != "null" ? response.especialidad = new RegExp(data.especialidad, 'gi') : '';
        data.semestre != "null" ? response.semestre = new RegExp(data.semestre, 'gi') : '';
        data.resultado != "null" ? response.resultado = new RegExp(data.resultado, 'gi') : '';
        data.actividad != "null" ? response.actividad = new RegExp(data.actividad, 'gi') : '';
    }
    return response;

}

module.exports = {
    buildQuery
}
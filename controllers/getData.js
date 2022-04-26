let model = require('../models/modelGeneral');
let query = require('../utils/utils');

let getQuery = async (req, res) => {
    let dataJson = {
        nombre: req.params.nombre,
        numeroControl: req.params.numeroControl,
        especialidad: req.params.especialidad,
        semestre: req.params.semestre,
        resultado: req.params.resultado,
        actividad: req.params.actividad
    }
    dataJson = query.buildQuery(dataJson);
    const data = await model.modelCreditos.find(dataJson).limit(100);
    res.send(data);
}

module.exports = {
    getQuery
}
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
    const data = await model.modelCreditos.find(dataJson);
    res.send(data);
}

let getAllData = async (req, res) => {
    let dataJson = {}
    try {
        let data = await model.modelCreditos.find({}).sort({$natural:-1}).limit(1000);
        res.send(data);   
    } catch (err) {
        res.send({err: true})
    }
}

module.exports = {
    getQuery,
    getAllData
}
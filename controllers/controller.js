'use strict'
let model = require('../models/modelGeneral');
let fs = require('fs')
let xlsx = require('xlsx');

let uploadData = async (req, res) => {
    const regex = /[a-zA-Z]/g;
    const path = `./files/${req.file.filename}`
    const wb = xlsx.readFile(path);
    const wbs = wb.SheetNames;

    for await (const sheets of wbs) {
        const dataXLSX = xlsx.utils.sheet_to_json(wb.Sheets[sheets], { header: 1 });
        for await (const dataSheets of dataXLSX) {
            if(dataSheets.length && dataSheets.length === 6){
                if (!regex.test(dataSheets[0].toString())){
                    console.log(dataSheets[0]);
                    let dataModel = {
                        nombre: dataSheets[1] ? dataSheets[1].toString().trim() : '',
                        numeroControl: dataSheets[2] ? dataSheets[2].toString().trim() : '',
                        especialidad: dataSheets[3] ? dataSheets[3].toString().trim() : '',
                        semestre: dataSheets[4] ? dataSheets[4].toString().trim() : '',
                        resultado: dataSheets[5] ? dataSheets[5].toString().trim() : '',
                        actividad: sheets ? sheets.trim() : 'error'
                    }
                    console.log(dataModel);
                    const addRow = new model.modelCreditos(dataModel);
                    await addRow.save();
                }
            }
        }
    }
    fs.unlinkSync(path)
    res.sendFile('desing/success.html', { root: __dirname });
}

let getLogIn = async (req, res) => {
    res.sendFile('desing/login.html', { root: __dirname });
}

let getUploadFile = async (req, res) => {
    res.sendFile('desing/uploadFiles.html', { root: __dirname });
}

let getHome = async (req, res) => {
    res.sendFile('desing/home.html', { root: __dirname });
}


module.exports = {
    uploadData,
    getLogIn,
    getUploadFile,
    getHome
}
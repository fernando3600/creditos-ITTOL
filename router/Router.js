'use strict'

const router = require('express').Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './files')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const upload = multer({storage});
const {getHtml, uploadData} = require('../controllers/controller');
const { getQuery } = require("../controllers/getData");


router
.get('/', getHtml)
.post('/subir', upload.single('file'), uploadData)
.get('/getQuery/:nombre/:numeroControl/:especialidad/:semestre/:resultado/:actividad', getQuery);

module.exports = router;
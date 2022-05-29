'use strict'

const router = require('express').Router();
const res = require('express/lib/response');
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
const {getLogIn, uploadData} = require('../controllers/controller');
const { checkUser } = require("../controllers/checkUsers");
const { getQuery } = require("../controllers/getData");


router
.get('/', getLogIn)
.post('/subir', upload.single('file'), uploadData)
.get('/getQuery/:nombre/:numeroControl/:especialidad/:semestre/:resultado/:actividad', getQuery)
.post('/home', checkUser);

module.exports = router;
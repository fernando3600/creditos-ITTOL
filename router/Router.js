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
const {getLogIn, uploadData, getUploadFile, getHome} = require('../controllers/controller');
const { checkUser } = require("../controllers/checkUsers");
const { getQuery, getAllData } = require("../controllers/getData");
const { singUp, singUpView } = require("../controllers/singUp");
const { getTableView, getAdvancedTableView } = require("../controllers/table");


router
.get('/', getLogIn)
.get('/singUpView', singUpView)
.get('/uploadFileView', getUploadFile)
.get('/getTable', getTableView)
.get('/getAdvancedTable', getAdvancedTableView)
.get('/home', getHome)
.get('/getQuery/:nombre/:numeroControl/:especialidad/:semestre/:resultado/:actividad', getQuery)
.get('/getAllData', getAllData)
.post('/subir', upload.single('file'), uploadData)
.post('/home', checkUser)
.post('/singUp', singUp);

module.exports = router;
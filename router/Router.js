'use strict'

const router = require('express').Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './controllers')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const upload = multer({storage});
const mw = require('../controllers/controller');


router
.get('/', mw.getHtml)
.post('/subir', upload.single('file'), mw.uploadData);

module.exports = router;
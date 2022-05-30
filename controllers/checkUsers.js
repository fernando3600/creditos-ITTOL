'use strict'

let modelUser = require('../models/modelUser');

let checkUser = async (req, res) => {

    if (req.body.user && req.body.pass) {
        try {
            let user = await modelUser.modelUsers.find({user: req.body.user, password: req.body.pass});
            console.log(user)
            if (user.length) {
                res.send({ exito: true });
            }else{
                res.send({ notFound: "El usuario no existe, por favor verifique" });
            }
        } catch (error) {
            console.log(error)
        }
    } else if (!req.body.user) {
        res.send({ err: "El campo usuario esta vacio, por favor verifique." });
    } else if (!req.body.pass) {
        res.send({ err: "El campo password esta vacio, por favor verifique." });
    }
}

module.exports = {
    checkUser
}
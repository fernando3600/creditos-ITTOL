'use strict'

let modelUser = require('../models/modelUser');

let singUp = async (req, res) => {
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(req.body.user)) return res.send({err: "el email no es correcto, por favor verifica!"});
    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(req.body.pass)) return res.send({err: "La contraseña solo debe tener letras mayusculas, minusculas, numeros y un minimo de 8 caracteres, por favor verifica!"});
    if (req.body.user && req.body.pass) {
        try {
            const addUser = new modelUser.modelUsers({user: req.body.user,
               password: req.body.pass});
            await addUser.save();
            res.send({scc: true});
        } catch (error) {
            if(error){
                res.send({err: `el email ${req.body.user} ya se encuentra registrado, por favor ingresa un correo diferente.`})
            }
        }
    } else if (!req.body.user) {
        res.send({ err: "El campo usuario esta vacio, por favor verifique." });
    } else if (!req.body.pass) {
        res.send({ err: "El campo password esta vacio, por favor verifique." });
    }

}

let singUpView = (req, res) => {
    res.sendFile('desing/singUp.html', { root: __dirname });
}

module.exports = {
    singUp,
    singUpView
}
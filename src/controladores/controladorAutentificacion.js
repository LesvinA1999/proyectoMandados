const enviarCorreo = require('../configuraciones/correo');
const ModeloUsuario = require('../modelos/modeloUsuarios');
const { validationResult } = require('express-validator');
const passport = require('../configuraciones/passport');
const msj = require('../componentes/mensajes');

exports.recuperarContrasena = async(req, res) => {
    const validacion = validationResult(req);
    if (!validacion.isEmpty()) {
        res.json(validacion.array());
    } else {
        const { Usuario } = req.body;
        var buscarUsuario = await ModeloUsuario.findOne({
            Usuario
        });
        const pin = Math.floor(Math.random() * (9999 - 1000)) + 1000;
        console.log(pin);
        if (buscarUsuario) {
            const data = {
                Usuario: Usuario
            };
            if (enviarCorreo.recuperarContrasena(data)) {
                res.send("Correo enviado");
            } else {
                res.send("Error al enviar el correo");
            }
        }
    }
};
exports.ValidarAutenticado = passport.ValidarAutenticado;
exports.InicioSesion = async(req, res) => {
    const validacion = validationResult(req);
    if (!validacion.isEmpty()) {
        msj("Los datos son invalidos", 200, validacion.array(), res);
    } else {
        const { Usuario, Contrasena } = req.body;
        const buscarUsuario = await ModeloUsuario.findOne({
            where: {
                Usuario: Usuario,
            }
        });
        if (!buscarUsuario) {
            msj("El usuario o contraseña son incorrectos", 200, [], res);
        } else {
            if (!buscarUsuario.VerificarContrasena(Contrasena, buscarUsuario.Contrasena)) {
                msj("El usuario o contraseña son incorrectos", 200, [], res);
            } else {
                const Token = passport.generarToken({ Idusuario: buscarUsuario.Idusuario });
                const data = {
                    token: Token,
                    data: buscarUsuario
                };
                msj("Bienvenido", 200, data, res);
            }
        }
    }
};

exports.Error = (req, res) => {
    msj("Debe estar autenticado", 200, [], res);
};
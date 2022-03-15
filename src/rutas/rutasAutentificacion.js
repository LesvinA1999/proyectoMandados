const { Router } = require("express");
const controladorAutenticacion = require("../controladores/controladorAutentificacion");
const { body, query } = require("express-validator"); //para la validacion
const router = Router();
router.post('/recuperarContrasena',
    body("correo").isEmail().withMessage("Debe enviar un correo valido"),

    controladorAutenticacion.recuperarContrasena
);
router.post('/inicioSesion',
    body("Usuario").isEmail().withMessage("Debe enviar un correo valido"),
    body("Contrasena").isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 o mas caracteres"),
    controladorAutenticacion.InicioSesion
);
router.get('/error', controladorAutenticacion.Error);
module.exports = router;
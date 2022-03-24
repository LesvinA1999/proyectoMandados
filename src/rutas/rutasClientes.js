const { Router } = require('express');
const controladorClientes = require('../controladores/controladorClientes');
const { body, query } = require("express-validator"); //para la validacion

const router = Router();
router.get('/', controladorClientes.Inicio);
router.get('/listar', controladorClientes.listarClientes);
router.post(
'/guardar', 
body("Usuario")
.isLength({ min: 3 })
.withMessage("El nombre del usuario debe tener al menos 3 caracteres"),
body("Contrasena")
.isLength({ min: 6 })
.withMessage("La contraseña debe tener al menos 6 o mas caracteres"),
controladorClientes.guardar
);
router.put('/modificar', controladorClientes.modificar);
router.delete('/eliminar', controladorClientes.eliminar);
module.exports = router;
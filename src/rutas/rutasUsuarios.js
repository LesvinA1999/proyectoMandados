const { Router } = require("express");
const controladorUsuarios = require("../controladores/controladorUsuarios");
const { body, query } = require("express-validator"); //para la validacion

const router = Router();
router.get("/", controladorUsuarios.Raiz);
router.get("/listar", controladorUsuarios.listaUsuarios);
router.post(
    "/guardar",

    body("IdTipoUsuario")
    .isInt()
    .withMessage("Debe enviar valores enteros para el id del tipo de usuario"),
    body("Usuario")
    .isLength({ min: 3 })
    .withMessage("El nombre del usuario debe tener al menos 3 caracteres"),
    body("Contrasena")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 o mas caracteres"),

    controladorUsuarios.guardar
);
router.put("/modificarContrasena", controladorUsuarios.modificar);
router.delete("/eliminar", controladorUsuarios.eliminar);
module.exports = router;
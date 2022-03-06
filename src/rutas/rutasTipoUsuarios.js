const { Router } = require('express');
const controladorTipoUsuario = require('../controladores/controladorTipoUsuarios');
const router = Router();

router.get('/', controladorTipoUsuario.Inicio);
router.get('/listar', controladorTipoUsuario.listarTipoUsuarios);
router.post('/guardar', controladorTipoUsuario.guardar);
router.put('/modificar', controladorTipoUsuario.modificar);
router.delete('/eliminar', controladorTipoUsuario.eliminar);
module.exports = router;
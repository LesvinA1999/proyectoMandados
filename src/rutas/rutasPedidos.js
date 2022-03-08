const { Router } = require('express');
const controladorPedidos = require('../controladores/controladorPedidos');
const router = Router();

router.get('/', controladorPedidos.Inicio);
router.get('/listar', controladorPedidos.listarTipoUsuarios);
router.post('/guardar', controladorPedidos.guardar);
router.put('/modificar', controladorPedidos.modificar);
router.delete('/eliminar', controladorPedidos.eliminar);
module.exports = router;
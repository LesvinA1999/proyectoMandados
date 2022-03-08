const { Router } = require('express');
const controladorDetallePedido = require('../controladores/controladorDetallePedido');
const router = Router();

router.get('/', controladorDetallePedido.Inicio);
router.get('/listar', controladorDetallePedido.listarDetallePedido);
router.post('/guardar', controladorDetallePedido.guardar);
router.put('/modificar', controladorDetallePedido.modificar);
router.delete('/eliminar', controladorDetallePedido.eliminar);
module.exports = router;
const { Router } = require('express');
const controladorComercio = require('../controladores/controladorComercio');
const router = Router();

router.get('/', controladorComercio.Inicio);
router.get('/listar', controladorComercio.listarComercio);
router.post('/guardar', controladorComercio.guardar);
router.put('/modificar', controladorComercio.modificar);
router.delete('/eliminar', controladorComercio.eliminar);
module.exports = router;
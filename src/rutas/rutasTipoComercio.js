const { Router } = require('express');
const controladorTipoComercion = require('../controladores/controladorTipoComercio');
const router = Router();

router.get('/', controladorTipoComercion.Inicio);
router.get('/listar', controladorTipoComercion.listarTipoComercio);
router.post('/guardar', controladorTipoComercion.guardar);
router.put('/modificar', controladorTipoComercion.modificar);
router.delete('/eliminar', controladorTipoComercion.eliminar);
module.exports = router;
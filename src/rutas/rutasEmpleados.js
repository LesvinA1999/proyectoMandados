const { Router } = require('express');
const controladorEmpleados = require('../controladores/controladorEmpleados');
const router = Router();

router.get('/', controladorEmpleados.Inicio);
router.get('/listar', controladorEmpleados.listarEmpleados);
router.post('/guardar', controladorEmpleados.guardar);
router.put('/modificar', controladorEmpleados.modificar);
router.delete('/eliminar', controladorEmpleados.eliminar);
module.exports = router;
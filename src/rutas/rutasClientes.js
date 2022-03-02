const {Router} = require('express');
const controladorClientes = require('../controladores/controladorCliente');
const router = Router();

router.get('/', controladorClientes.Inicio);
router.get('/listar', controladorClientes.listarClientes);
router.post('/guardar', controladorClientes.guardar);
router.put('/modificar', controladorClientes.modificar);
router.delete('/eliminar', controladorClientes.eliminar);
module.exports=router;
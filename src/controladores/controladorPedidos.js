const { request } = require('express');
const { is } = require('express/lib/request');
const ModeloPedido = require('../modelos/modeloPedidos');

exports.Inicio = (req, res) => {
    res.send("Modulo de pedidos pryecto programacion movil II");
};

exports.listarPedidos = async(req, res) => {
    const listaPedido = await ModeloPedido.findAll();
    if (listaPedido.length == 0) {
        res.send("No existen datos almacenados");
    } else {
        res.json(listaPedido);
    }
};

exports.guardar = async(req, res) => {
    const { IdCliente, precioEnvio, IdEmpleado, IdDetallePedido, FechaPedido, EstadoPedido } = req.body;
    if (!IdCliente) {
        res.send("Ingrese los datos requeridos");
    } else {
        await ModeloPedido.create({
                IdCliente: IdCliente,
                precioEnvio: precioEnvio,
                IdEmpleado: IdEmpleado,
                IdDetallePedido: IdDetallePedido,
                FechaPedido: FechaPedido,
                EstadoPedido: EstadoPedido
            })
            .then((data) => {
                console.log(data);
                res.send("Registro almacenado");
            })

        .catch((error) => {
            console.log(error);
            res.send("Error al guardar los datos");
        });
    }
};

exports.modificar = async(req, res) => {
    const { IdPedido } = req.query;
    const { IdCliente, precioEnvio, IdEmpleado, IdDetallePedido, FechaPedido, EstadoPedido } = req.body;
    if (!IdPedido || !IdCliente || !precioEnvio || !IdEmpleado || !IdDetallePedido || !FechaPedido || !EstadoPedido) {
        res.send("Ingrese datos completos");
    } else {
        var buscarPedido = await ModeloPedido.findOne({
            where: {
                IdPedido: IdPedido,
            }
        });
        if (!buscarPedido) {
            res.send("No existe id");
        } else {
            buscarPedido.IdCliente = IdCliente;
            buscarPedido.precioEnvio = precioEnvio;
            buscarPedido.IdEmpleado = IdEmpleado;
            buscarPedido.IdDetallePedido = IdDetallePedido;
            buscarPedido.FechaPedido = FechaPedido;
            buscarPedido.EstadoPedido = EstadoPedido;

            await buscarPedido.save()
                .then((data) => {
                    console.log(data);
                    res.send("registro modificado");
                })
                .catch((error) => {
                    console.log(error);
                    res.send("Error al modificar los datos");
                });
        }
    }
};

exports.eliminar = async(req, res) => {
    const { IdPedido } = req.query;
    if (!IdPedido) {
        res.send("Ingrese id de registro");
    } else {
        var buscarPedido = await ModeloPedido.findOne({
            where: {
                IdPedido: IdPedido,
            }
        });
        if (!buscarPedido) {
            res.send("No existe id");
        } else {
            await ModeloPedido.destroy({
                    where: {
                        IdPedido: IdPedido,
                    }
                })
                .then((data) => {
                    console.log(data);
                    res.send("registro eliminado");
                })
                .catch((error) => {
                    console.log(error);
                    res.send("Error al eliminar los datos");
                });
        }
    }
};
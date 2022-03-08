const { request } = require('express');
const { is } = require('express/lib/request');
const ModeloCliente = require('../modelos/modeloDetallePedido');

exports.Inicio = (req, res) => {
    res.send("Modulo de Detalle Pedidos pryecto programacion movil II");
};

exports.listar = async(req, res) => {
    const listaDetallePedido = await ModeloDetallePedido.findAll();
    if (listaDetallePedido.length == 0) {
        res.send("No existen datos almacenados");
    } else {
        res.json(listaDetallePedido);
    }
};

exports.guardar = async(req, res) => {
    const { IdDetallePedidos, Cantidad, subTotal, IdEstadoPedido, IdComercio, IdFacctura } = req.body;
    if (!IdDetallePedidos) {
        res.send("Ingrese los datos requeridos");
    } else {
        await ModeloDetallePedido.create({
                IdDetallePedidos: IdDetallePedidos,
                Cantidad: Cantidad,
                subTotal: subTotal,
                IdEstadoPedido: IdEstadoPedido,
                IdComercio: IdComercio,
                IdFacctura: IdFacctura
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
    const { IdDetallePedidos } = req.query;
    const { Cantidad, subTotal, IdEstadoPedido, IdComercio, IdFacctura } = req.body;
    if (!IdDetallePedidos || !Cantidad || !subTotal || !IdEstadoPedido || !IdComercio || !IdFacctura ) {
        res.send("Ingrese datos completos");
    } else {
        var buscarDetallePedido = await ModeloDetallePedido.findOne({
            where: {
                IdDetallePedidos: IdDetallePedidos,
            }
        });
        if (!buscarDetallePedido) {
            res.send("No existe id");
        } else {
            buscarDetallePedido.IdDetallePedidos = IdDetallePedidos;
            buscarDetallePedido.Cantidad = Cantidad;
            buscarDetallePedido.subTotal = subTotal;
            buscarDetallePedido.IdEstadoPedido = IdEstadoPedido;
            buscarDetallePedido.IdComercio = IdComercio;
            buscarDetallePedido.IdFacctura = IdFacctura;

            await buscarDetallePedido.save()
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
    const { IdDetallePedidos } = req.query;
    if (!IdDetallePedidos) {
        res.send("Ingrese id de registro");
    } else {
        var buscarDetallePedido = await ModeloDetallePedido.findOne({
            where: {
                IdDetallePedidos: IdDetallePedidos,
            }
        });
        if (!buscarDetallePedido) {
            res.send("No existe id");
        } else {
            await ModeloDetallePedido.destroy({
                    where: {
                        IdDetallePedidos: IdDetallePedidos,
                    }
                })
                .then((data) => {
                    console.log(data);
                    if (data == 0) {
                        res.send("registro eliminado");
                    }

                })
                .catch((error) => {
                    console.log(error);
                    res.send("Error al eliminar los datos");
                });
        }
    }
};
const { request } = require('express');
const { is } = require('express/lib/request');
const ModeloComercio = require('../modelos/modeloComercio');

exports.Inicio = (req, res) => {
    res.send("Modulo de comercio proyecto programacion movil II");
};

exports.listarComercio = async(req, res) => {
    const listaComercio = await ModeloComercio.findAll();
    if (listaComercio.length == 0) {
        res.send("No existen datos almacenados");
    } else {
        res.json(listaComercio);
    }
};

exports.guardar = async(req, res) => {
    const { NombreComercio, IdTipoComercio } = req.body;
    if (!NombreComercio || !IdTipoComercio) {
        res.send("Ingrese los datos requeridos");
    } else {
        await ModeloComercio.create({
                NombreComercio: NombreComercio,
                IdTipoComercio: IdTipoComercio
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
    const { IdComercio } = req.query;
    const { NombreComercio, IdTipoComercio } = req.body;
    if (!IdComercio || !NombreComercio || !IdTipoComercio) {
        res.send("Ingrese datos completos");
    } else {
        var buscarComercio = await ModeloComercio.findOne({
            where: {
                IdComercio: IdComercio,
            }
        });
        if (!buscarComercio) {
            res.send("No existe id");
        } else {
            buscarComercio.NombreComercio = NombreComercio;
            buscarComercio.IdTipoComercio = IdTipoComercio;

            await buscarComercio.save()
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
    const { IdComercio } = req.query;
    if (!IdComercio) {
        res.send("Ingrese id de registro");
    } else {
        var buscarComercio = await ModeloComercio.findOne({
            where: {
                IdComercio: IdComercio,
            }
        });
        if (!buscarComercio) {
            res.send("No existe id");
        } else {
            await ModeloComercio.destroy({
                    where: {
                        IdComercio: IdComercio,
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
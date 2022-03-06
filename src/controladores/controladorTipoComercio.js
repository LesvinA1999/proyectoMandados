const { request } = require('express');
const { is } = require('express/lib/request');
const ModeloTipoComercio = require('../modelos/modeloTipoComercio');

exports.Inicio = (req, res) => {
    res.send("Modulo de tipo de comercio proyecto programacion movil II");
};

exports.listarTipoComercio = async(req, res) => {
    const listaTipoComercio = await ModeloTipoComercio.findAll();
    if (listaTipoComercio.length == 0) {
        res.send("No existen datos almacenados");
    } else {
        res.json(listaTipoComercio);
    }
};

exports.guardar = async(req, res) => {
    const { DescripcionComercio, IdTipoComercio } = req.body;
    if (!DescripcionComercio || !IdTipoComercio) {
        res.send("Ingrese los datos requeridos");
    } else {
        await ModeloTipoComercio.create({
                DescripcionComercio: DescripcionComercio,
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
    const { DescripcionComercio, IdTipoComercio } = req.body;
    if (!IdTipoComercio || !DescripcionComercio || !IdTipoComercio) {
        res.send("Ingrese datos completos");
    } else {
        var buscarTipoComercio = await ModeloTipoComercio.findOne({
            where: {
                IdTipoComercio: IdTipoComercio,
            }
        });
        if (!buscarTipoComercio) {
            res.send("No existe id");
        } else {
            buscarTipoComercio.DescripcionComercio = DescripcionComercio;
            buscarTipoComercio.IdTipoComercio = IdTipoComercio;

            await buscarTipoComercio.save()
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
    const { IdTipoComercio } = req.query;
    if (!IdTipoComercio) {
        res.send("Ingrese id de registro");
    } else {
        var buscarTipoComercio = await ModeloTipoComercio.findOne({
            where: {
                IdTipoComercio: IdTipoComercio,
            }
        });
        if (!buscarTipoComercio) {
            res.send("No existe id");
        } else {
            await ModeloTipoComercio.destroy({
                    where: {
                        IdTipoComercio: IdTipoComercio,
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
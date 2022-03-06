const { request } = require('express');
const { is } = require('express/lib/request');
const ModeloTipoUsuario = require('../modelos/modeloTipoUsuarios');

exports.Inicio = (req, res) => {
    res.send("Modulo de tipos de usuarios proyecto programacion movil II");
};

exports.listarTipoUsuarios = async(req, res) => {
    const listaTipo = await ModeloTipoUsuario.findAll();
    if (listaTipo.length == 0) {
        res.send("No existen datos almacenados");
    } else {
        res.json(listaTipo);
    }
};

exports.guardar = async(req, res) => {
    const { DescripcionTipo } = req.body;
    if (!DescripcionTipo) {
        res.send("Ingrese los datos requeridos");
    } else {
        await ModeloTipoUsuario.create({
                DescripcionTipo: DescripcionTipo
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
    const { IdTipoUsuario } = req.query;
    const { DescripcionTipo } = req.body;
    if (!IdTipoUsuario || !DescripcionTipo) {
        res.send("Ingrese datos completos");
    } else {
        var buscarTipoU = await ModeloTipoUsuario.findOne({
            where: {
                IdTipoUsuario: IdTipoUsuario,
            }
        });
        if (!buscarTipoU) {
            res.send("No existe id");
        } else {
            buscarTipoU.DescripcionTipo = DescripcionTipo;

            await buscarTipoU.save()
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
    const { IdTipoUsuario } = req.query;
    if (!IdTipoUsuario) {
        res.send("Ingrese id de registro");
    } else {
        var buscarTipoU = await ModeloTipoUsuario.findOne({
            where: {
                IdTipoUsuario: IdTipoUsuario,
            }
        });
        if (!buscarTipoU) {
            res.send("No existe id");
        } else {
            await ModeloTipoUsuario.destroy({
                    where: {
                        IdTipoUsuario: IdTipoUsuario
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
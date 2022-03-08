const { request } = require('express');
const { is } = require('express/lib/request');
const ModeloEmpleados = require('../modelos/modeloEmpleado');

exports.Inicio = (req, res) => {
    res.send("Modulo de clientes proyecto programacion movil II");
};

exports.listarEmpleados = async(req, res) => {
    const listaEmpleados = await ModeloEmpleados.findAll();
    if (listaEmpleados.length == 0) {
        res.send("No existen datos almacenados");
    } else {
        res.json(listaEmpleados);
    }
};

exports.guardar = async(req, res) => {
    const { NombreEmpleado, ApellidoEmpleado, TelefonoEmpleado, CorreoEmpleado, Idusuario } = req.body;
    if (!NombreEmpleado || !ApellidoEmpleado || !Idusuario) {
        res.send("Ingrese los datos requeridos");
    } else {
        await ModeloEmpleados.create({
                NombreEmpleado: NombreEmpleado,
                ApellidoEmpleado: ApellidoEmpleado,
                TelefonoEmpleado: TelefonoEmpleado,
                CorreoEmpleado: CorreoEmpleado,
                Idusuario: Idusuario
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
    const { IdEmpleado } = req.query;
    const { NombreEmpleado, ApellidoEmpleado, TelefonoEmpleado, CorreoEmpleado, Idusuario } = req.body;
    if (!IdEmpleado || !NombreEmpleado || !ApellidoEmpleado || !Idusuario) {
        res.send("Ingrese datos completos");
    } else {
        var buscarEmpleado = await ModeloEmpleados.findOne({
            where: {
                IdEmpleado: IdEmpleado,
            }
        });
        if (!buscarEmpleado) {
            res.send("No existe id");
        } else {
            buscarEmpleado.NombreEmpleado = NombreEmpleado;
            buscarEmpleado.ApellidoEmpleado = ApellidoEmpleado;
            buscarEmpleado.TelefonoEmpleado = TelefonoEmpleado;
            buscarEmpleado.CorreoEmpleado = CorreoEmpleado;
            buscarEmpleado.Idusuario = Idusuario;

            await buscarEmpleado.save()
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
    const { IdEmpleado } = req.query;
    if (!IdEmpleado) {
        res.send("Ingrese id de registro");
    } else {
        var buscarEmpleado = await ModeloEmpleados.findOne({
            where: {
                IdEmpleado: IdEmpleado,
            }
        });
        if (!buscarEmpleado) {
            res.send("No existe id");
        } else {
            await ModeloEmpleados.destroy({
                    where: {
                        IdEmpleado: IdEmpleado,
                    }
                })
                .then((data) => {

                    res.send("registro eliminado");

                })
                .catch((error) => {
                    console.log(error);
                    res.send("Error al eliminar los datos");
                });
        }
    }
};
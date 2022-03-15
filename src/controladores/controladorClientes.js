const { request } = require('express');
const { is } = require('express/lib/request');
const ModeloCliente = require('../modelos/modeloClientes');

exports.Inicio = (req, res) => {
    res.send("Modulo de clientes pryecto programacion movil II");
};

exports.listarClientes = async(req, res) => {
    const listaCliente = await ModeloCliente.findAll();
    if (listaCliente.length == 0) {
        res.send("No existen datos almacenados");
    } else {
        res.json(listaCliente);
    }
};

exports.guardar = async(req, res) => {
    const { NombreCliente, ApellidoCliente, TelefonoCliente, Direccion, Idusuario } = req.body;
    if (!NombreCliente || !ApellidoCliente || !Idusuario) {
        res.send("Ingrese los datos requeridos");
    } else {
        await ModeloCliente.create({
                NombreCliente: NombreCliente,
                ApellidoCliente: ApellidoCliente,
                TelefonoCliente: TelefonoCliente,
                Direccion: Direccion,
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
    const { IdCliente } = req.query;
    const { NombreCliente, ApellidoCliente, TelefonoCliente, Direccion, Idusuario } = req.body;
    if (!IdCliente || !NombreCliente || !ApellidoCliente || !TelefonoCliente || !Direccion || !Idusuario) {
        res.send("Ingrese datos completos");
    } else {
        var buscarCliente = await ModeloCliente.findOne({
            where: {
                IdCliente: IdCliente,
            }
        });
        if (!buscarCliente) {
            res.send("No existe id");
        } else {
            buscarCliente.NombreCliente = NombreCliente;
            buscarCliente.ApellidoCliente = ApellidoCliente;
            buscarCliente.TelefonoCliente = TelefonoCliente;
            buscarCliente.Direccion = Direccion;
            buscarCliente.Idusuario = Idusuario;

            await buscarCliente.save()
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
    const { IdCliente } = req.query;
    if (!IdCliente) {
        res.send("Ingrese id de registro");
    } else {
        var buscarCliente = await ModeloCliente.findOne({
            where: {
                IdCliente: IdCliente,
            }
        });
        if (!buscarCliente) {
            res.send("No existe id");
        } else {
            await ModeloCliente.destroy({
                    where: {
                        IdCliente: IdCliente,
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
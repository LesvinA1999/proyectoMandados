const ModeloUsuario = require("../modelos/modeloUsuarios");
const { validationResult } = require("express-validator"); //variable capturar errores
exports.Raiz = (req, res) => {
    res.send("Esto es el inicio de el modulo de usuario");
};

exports.listaUsuarios = async(req, res) => {
    //async para que la peticion se espere que responda el servidor
    const listaUsuarios = await ModeloUsuario.findAll();

    if (listaUsuarios.length == 0) {
        res.send("No existe datos");
    } else {
        res.json(listaUsuarios);
    }
};
exports.buscarUsuarios = async(req, res) => {
    //async para que la peticion se espere que responda el servidor
    const listaUsuarios = await ModeloUsuario.findAll();

    if (listaUsuarios.length == 0) {
        res.send("No existe datos");
    } else {
        res.json(listaUsuarios);
    }
};

exports.guardar = async(req, res) => {
    //async para que la peticion se espere que responda el servidor

    const validacion = validationResult(req); //capturar errores

    if (!validacion.isEmpty()) {
        res.json(validacion.array());
    } else {
        const { Usuario, Contrasena, IdTipoUsuario } = req.body; //solo datos obligatorios

        if (!Usuario || !Contrasena || !IdTipoUsuario) {
            res.send("Debe enviar los datos completos");
        } else {
            await ModeloUsuario.create({
                    Usuario: Usuario,
                    Contrasena: Contrasena,
                    IdTipoUsuario: IdTipoUsuario
                })
                .then((data) => {
                    console.log(data);
                    res.send("Registro Alamacenado");
                })
                .catch((error) => {
                    console.log(error);
                    res.send("Error al guardar los datos");
                });
        }
    }
};

exports.modificar = async(req, res) => {
    //async para que la peticion se espere que responda el servidor
    console.log(req.query);
    console.log(req.body);
    const { IdUsuario } = req.query; //capture los valores
    const { Contrasena } = req.body; //post oculta

    if (!IdUsuario || !Contrasena) {
        res.send("Envie los datos completos");
    } else {
        var buscarUsuario = await ModeloUsuario.findOne({
            //var porque queremos que cambie el valor
            // findOne buscar un id exista dentro la db
            where: {
                IdUsuario: IdUsuario
            },
        });

        if (!buscarUsuario) {
            res.send("El id no existe o esta inactivo");
        } else {
            console.log(buscarUsuario.Usuario);

            buscarUsuario.Contrasena = Contrasena;

            //modificar en la bd

            await buscarUsuario
                .save()
                .then((data) => {
                    //ver los datos
                    console.log(data); //ver dato

                    res.send("Registro actualizado");
                })
                .catch((error) => {
                    res.send("Error al actualizar");
                });
        }
    }
};

exports.eliminar = async(req, res) => {
    //async para que la peticion se espere que responda el servidor
    console.log(req.query);
    console.log(req.body);
    const { IdUsuario } = req.query; //capture los valores

    if (!IdUsuario) {
        res.send("Envie el id del registro");
    } else {
        var buscarUsuario = await ModeloUsuario.findOne({
            //var porque queremos que cambie el valor
            // findOne buscar un id exista dentro la db
            where: {
                IdUsuario: IdUsuario,
            },
        });

        if (!buscarUsuario) {
            res.send("El id no existe");
        } else {
            await ModeloUsuario.destroy({
                    //destroy elimina
                    where: {
                        IdUsuario: IdUsuario,
                    },
                }) //indicar el where

            .then((data) => {
                    //ver los datos
                    console.log(data); //ver dato

                    res.send("Registro eliminado");
                })
                .catch((error) => {
                    console.log(data);
                    res.send("Error al eliminar el registro");
                });
        }
    }
};
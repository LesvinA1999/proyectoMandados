const { request } = require('express');
const { is } = require('express/lib/request');
const ModeloCliente = require('../modelos/modeloClientes');

exports.Inicio = (req, res) =>{
    res.send("Modulo de clientes pryecto programacion movil II");
};

exports.listarClientes = async (req, res) =>{
    const listaCliente = await ModeloCliente.findAll();
    if(listaCliente.length==0){
        res.send("No existen datos almacenados");
    }
    else{
        res.json(listaCliente);
    }
};

exports.guardar = async (req, res) =>{
    const{Nombre, Apellido, Telefono} = req.body;
    if(!Nombre || !Apellido){
        res.send("Ingrese los datos requeridos");
    }
    else{
        await ModeloCliente.create({
            Nombre: Nombre,
            Apellido: Apellido,
            Telefono: Telefono
        })
        .then((data)=>{
            console.log(data);
            res.send("Registro almacenado");
        })
        .catch((error)=>{
            console.log(error);
            res.send("Error al guardar los datos");
        });
    }
};

exports.modificar = async (req, res) =>{
    const {Id} = req.query;
    const {Nombre, Apellido, Telefono} = req.body;
    if(!Id || !Nombre || !Apellido || !Telefono){
        res.send("Ingrese datos completos");
    }
    else{
        var buscarCliente = await ModeloCliente.findOne({
            where:{
                Id:Id, 
            }
        });
        if(!buscarCliente){
            res.send("No existe id");
        }
        else{
            buscarCliente.Nombre=Nombre;
            buscarCliente.Apellido=Apellido;
            buscarCliente.Telefono=Telefono;

            await buscarCliente.save()
            .then((data)=>{
                console.log(data);
                res.send("registro modificado");
            })
            .catch((error)=>{
                console.log(error);
                res.send("Error al modificar los datos");
            });
        }
    }
};

exports.eliminar = async (req, res) =>{
    const {Id} = req.query;
    if(!Id){
        res.send("Ingrese id de registro");
    }
    else{
        var buscarCliente = await ModeloCliente.findOne({
            where:{
                Id:Id, 
            }
        });
        if(!buscarCliente){
            res.send("No existe id");
        }
        else{
            await ModeloCliente.destroy({
                where: 
                {
                    Id:Id,
                }               
            })
            .then((data)=>{
                console.log(data);
                if (data == 0){
                    res.send("registro eliminado");
                }
                
            })
            .catch((error)=>{
                console.log(error);
                res.send("Error al eliminar los datos");
            });
        }
    }
};
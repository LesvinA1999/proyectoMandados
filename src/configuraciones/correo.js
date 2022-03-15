const nodemailer = require('nodemailer');
exports.recuperarContrasena = async(data) => {
    const configuracionCorreo = {
        from: process.env.correo_app,
        to: data.correo,
        subject: "Recuperar contraseña",
        text: "Pin: " + data.pin,
    };
    const transporte = nodemailer.createTransport({
        host: process.env.correo_servicio,
        port: process.env.correo_port,
        secure: true,
        auth: {
            user: process.env.correo_app,
            pass: process.env.correo_contrasena
        },
    });
    await transporte.verify(async function(error, success) {
        if (error) {
            console.log(error);
            return false;
        } else {
            console.log("El servdor puede enviar correos");
        }
    });
    return await transporte.sendMail(configuracionCorreo);
};
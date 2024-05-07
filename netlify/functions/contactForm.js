// const { config } = require("dotenv");
// const nodemailer = require("nodemailer");
// config();


// const transport = nodemailer.createTransport({
//   host: process.env.EMAIL_HOST,
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });


//   function enviarMail(mail) {
//     return new Promise((resolve, reject) => {
//       transport.sendMail(mail,
//         (error, _) => {
//           error
//             ? reject({
//                 statusCode: 500,
//                 body: error,
//               })
//             : resolve({
//                 statusCode: 200,
//                 body: "Email enviado con éxito a " + mail.to,
//               });
//         }
//       );
//     });
//   }


// function generarCuerpoMensaje(params) {
// return `Formulario de contacto enviado por ${params.nombre} - ${params.email}.
// El mensaje es el siguiente:
// ${params.mensaje}
// `;
//   }

// exports.handler = async (event, context)=> {
//     switch(event.httpMethod){
//         case "POST":
//             const params = JSON.parse(event.body);
//             console.log("RECIBÍ UNA SOLICITUD",params)
//             return await enviarMail({
//                 from: process.env.EMAIL_USER,
//                 to: "andersonhenao329@gmail.com",
//                 subject: "CONTACTO - " + params.name,
//                 text: generarCuerpoMensaje(params),
//             });
//         default:
//             return{
//                 statusCode: 405,
//                 message: "Método no soportado"
//             }
//     }
// }



const { config } = require("dotenv");
const nodemailer = require("nodemailer");
config();

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function enviarMail(mail) {
  return new Promise((resolve, reject) => {
    transport.sendMail(mail, (error, info) => {
      if (error) {
        console.error('Error al enviar correo electrónico:', error);
        reject({
          statusCode: 500,
          body: 'Error al enviar correo electrónico: ' + error.message,
        });
      } else {
        console.log('Correo electrónico enviado:', info.response);
        resolve({
          statusCode: 200,
          body: 'Correo electrónico enviado correctamente a ' + mail.to,
        });
      }
    });
  });
}

function generarCuerpoMensaje(params) {
  return `Formulario de contacto enviado por ${params.nombre} - ${params.email}.
El mensaje es el siguiente:
${params.mensaje}
`;
}

exports.handler = async (event, context) => {
  switch (event.httpMethod) {
    case "POST":
      const params = JSON.parse(event.body);
      console.log("RECIBÍ UNA SOLICITUD", params);
      return await enviarMail({
        from: process.env.EMAIL_USER,
        to: "andersonhenao329@gmail.com",
        subject: "CONTACTO - " + params.name,
        text: generarCuerpoMensaje(params),
      });
    default:
      return {
        statusCode: 405,
        message: "Método no soportado",
      };
  }
};

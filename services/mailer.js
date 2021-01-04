const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "canelonesreservas@gmail.com",
    pass: "Canelones2020",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const EnviarMailReserva = function (ObjMail) {
  const { people, date, time, name, email } = ObjMail;
  const mailOptions = {
    from: "Reservas Canelones",
    to: email,
    subject: "Confirmacion de reserva",
    html: `
            <h1>Estimad@ ${name} </h1>
            <p>Queriamos avisarle que hemos registrado su reserva</p>
            <p>Si dentro de las próximas 12 hs no recibe una confirmacioón llame al 11 - 8000 - 564l (CANE)</p>
            <p>Datos de la reserva : </p>
            <ul>
                <li>Fecha : ${date}</li>
                <li>Hora: ${time}</li>
                <li>Cantidad de Personas: ${people}</li>
            </ul>
        `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    }
  });
};

const EnviarMailContacto = function (ObjMail) {
  const { c_name, c_email, c_message } = ObjMail;
  const mailOptions = {
    to: "canelonesreservas@gmail.com",
    subject: "Consulta",
    html: `
            <h1>De ${c_name} ${c_email}</h1>
            <p>Consulta : </p>
            <p>${c_message}</p>
        `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = { EnviarMailReserva, EnviarMailContacto };

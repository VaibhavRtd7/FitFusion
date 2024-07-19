import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: `${options.message}`,
  };
  // console.log('Mail Options:', mailOptions);


  await transporter.sendMail(mailOptions);
  // console.log('Email sent successfully');

};
















// import nodeMailer from "nodemailer"

// export const sendEmail = async (options) => {
     
//     const transporter = nodeMailer.createTransport({
//         host: process.env.SMTP_HOST,
//         port: process.env.SMTP_PORT,
//         service: process.env.SMTP_SERVICE,
//         auth: {
//           user: process.env.SMTP_MAIL,
//           pass: process.env.SMTP_PASSWORD,
//         },
//     })

//     const mailOptions={
//         from: process.env.SMTP_MAIL,       // sender address
//         to: options.email,                // list of receivers
//         subject: options.subject,         // Subject line
//         text: `${options.message}`,       // plain text body
//         html: "<b>Hello world?</b>",      // html body
//     }

//     await transporter.sendEmail(mailOptions);
// }
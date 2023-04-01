const express = require("express");
let Validator = require("validatorjs");
let compression = require("compression");

require("dotenv").config();
const nodemailer = require("nodemailer");

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(compression());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

const main = async (data) => {
  const { firstName, lastName, email, phone, company, message } = data;
  //   console.log(data);

  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    secure: true,
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: `"Mercho branding" <${process.env.EMAIL_USER}>`, // sender address
    to: "yaqubabdallah@gmail.com", // list of receivers
    subject: "Contact Form", // Subject line
    // text: "Hello world?", // plain text body
    html: `
          <h4>Name: ${firstName} ${lastName}</h4>
          <h4>Email Address: ${email}</h4>
          <h4>Phone number: ${phone}</h4>
          <h4>Company: ${company}</h4>
          <h4>
          Message: <br />
          ${message}
          </h4>
      
      `, // html body
  });

  console.log("Message sent: %s", info.messageId);
};

app.post("/contact", async (req, res) => {
  let data = req.body;

  let validationRules = {
    firstName: "required|alpha",
    lastName: "required|alpha",
    email: "required|email",
    phone: "numeric",
    message: "required",
  };

  let customMessages = {
    "required.firstName": "Please enter your first name",
    "required.lastName": "Please enter your last name",
    "required.email": "Please enter your email address",
    "required.message": "Please type in message",
    "alpha.firstName": "Please enter a valid first name",
    "alpha.lastName": "Please enter a valid last name",
    "email.email": "Please enter a valid email address",
    "numeric.phone": "Please enter a valid phone number",
  };

  let validation = new Validator(data, validationRules, customMessages);

  if (validation.fails()) {
    res.status(412).send({
      success: false,
      message: "validation failed",
      data: validation.errors,
    });
  } else {
    await main(data)
      .then((res) =>
        res.status(201).send({ success: true, message: "Message sent" })
      )
      .catch((err) =>
        res.send({
          success: false,
          message: "Message failed to send",
          data: err,
        })
      );
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

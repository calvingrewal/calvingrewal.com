const express = require('express')
const nodemailer = require('nodemailer');

const bodyParser = require('body-parser')
const path = require('path')

require('dotenv').config()

const app = express()

app.use('/static', express.static(path.join(__dirname, 'static')))

app.use(bodyParser.json())

app.post('/contact', (req,res) => {
  const{ EMAIL_ADDRESS, EMAIL_PASSWORD } = process.env
  console.log(EMAIL_ADDRESS, EMAIL_PASSWORD);
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: EMAIL_ADDRESS,
          pass: EMAIL_PASSWORD
      }
  });

  let mailOptions = {
      from: '"Calvin Grewal" <calvingrewal28@gmail.com>',
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      res.json({success: true})
  });


})
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(process.env.PORT || 3000, () => {
  console.log('*********************Listening on port 3000*********************');
})

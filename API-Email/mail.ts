// @ts-ignore
const express = require('express')
const nodemailer = require('nodemailer')
//@ts-ignore
const router = express.Router()


router.post('/mail', (req, res) => {
  const output = `
    <p> <b> Name:</b> ${ req.body.form.name } </p>
    
    <b>From:</b><a href="mailto:${ req.body.form.email}">${ req.body.form.email } </a>
    
    <p><b>Message:</b></p>
    
    <p> ${ req.body.form.message } </p>
  
  `

  const mailTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'Kanibal080@gmail.com',
      pass: 'Berbatov853532'
    },
  })

  const mailOptions = {
    from: 'And1933@yandex.ru',
    to: 'Kanibal080@gmail.com',
    subject: 'Ob-Vious Consulting',
    html: output
  }

  mailTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error', error)
    } else {
      console.log('Success', info)
    }
  })
  res.send("Done")

})

module.exports = router





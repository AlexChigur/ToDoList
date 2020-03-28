// @ts-ignore
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
// @ts-ignore
const router = require('./mail.ts')


app.use(cors())

app.use(bodyParser.json())
app.use(router)

app.listen(4000, () => {
  console.log('server run')
})



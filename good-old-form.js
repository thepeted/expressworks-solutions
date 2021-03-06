'use strict'
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.argv[2]

app.use(bodyParser.urlencoded({ extended: false }))
app.post('/form', (req, res) => {
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(port)
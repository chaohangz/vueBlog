const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParse = require('body-parser')
const router = require('./server/router')
const app = express()

const resolve = file => path.resolve(__dirname, file)

app.use('/dist', express.static(resolve('./dist')))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))
app.use(router)

app.get('*', function (req, res) {
  let html = fs.readFileSync(resolve('./' + 'index.html'), 'utf-8')
  res.send(html)
})

app.listen(3000, function () {
  console.log('访问地址为 localhost:3000')
})
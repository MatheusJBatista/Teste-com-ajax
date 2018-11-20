const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/view');
// app.use(express.static('./app/view/'));

app.use(bodyParser.urlencoded({extended:true}))

consign()
  .include('config/dbConnection.js')
  .then('app/routes')
  .then('app/controller/')
  .then('app/model')
  .into(app)

module.exports = app;

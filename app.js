// Requirements
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  cookie: {
    maxAge: Number(process.env.EXPRESS_SESSION_DURATION)
  },
  secret: 'mySecret',
  resave: true,
  saveUninitialized: true
}));
app.use(morgan('tiny'));

// Static Files - Additionally grabbing Bootstrap and jQuery
app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, 'public')));

// Set the HTML Template engine to EJS
app.set('views', ['./main/views', './apps']);
app.set('view engine', 'ejs');

// Export app to be used in Server.js
module.exports.app = app;

// Add Routes to the app
app.use('/', require('./main/routes/routes').router);

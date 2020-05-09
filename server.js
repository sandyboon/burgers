const express = require('express');
const apiRouter - require('./controllers/burgers_controller')

//create the app
const app = express();

//set up middleware to handle data
app.use(express.urlencoded({ extended: tr }));
app.use(express.json());

//serve up static content
app.use(express.static('public'));

app.use('/app',apiRouter )
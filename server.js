'use strict';

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Setup Express Server
const app = express();
const PORT = process.env.PORT || 8080;

// bodyParser
app.use(bodyParser.json());

// Static directory
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

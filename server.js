'use strict';

// Dependencies
// ============================================
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

var accountSid = 'AC3932e60c1d3ea3f63d65601c8cd831a5'; // Your Account SID from www.twilio.com/console
var authToken = '6780e2cb6897f666d01324c4fb2bcef6';   // Your Auth Token from www.twilio.com/console

// var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+19152035856',  // Text this number
    from: '+19153018272' // From a valid Twilio number
})
.then((message) => console.log(message.sid));

// Setup Express Server
const app = express();
const PORT = process.env.PORT || 8080;

// bodyParser
app.use(bodyParser.json());

// Require Routes
require("./routes/htmlRoutes.js")(app);

// Static directory
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

// Server
// Dependencies
// Using dotenv as configuration deps.
require('dotenv').config();

const express = require("express"),
    bodyParser = require('body-parser'),
    cors = require("cors");


// Initiate your server application
const app = express(),
    port = process.env.PORT || 3333;


//Enable Cross Origin Resource Sharing
app.use(cors());


//Add body-parser to process data attached to body on http request
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());


//Initiate database connection
var db = require('./src/config/database');


//Extend application routes
var UserRouter = require('./src/routers/UserRouter');
app.use('/',[UserRouter]);

// Start your server on specified port
app.listen(port);

// If you see this, you are all set.
console.log("Welcome to "+port+" Baker Street!");

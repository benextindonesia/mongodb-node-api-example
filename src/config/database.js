//Import environment variables using dotenv
require('dotenv').config();

//Importing Dependencies
var mongoose = require('mongoose'),
    db = process.env.DB || "mongodb://localhost/arcade";

//ATTENTION
//Due to deprecated mongoose Promise, we recommend you to use external deps for promise.
mongoose.Promise = require('bluebird');

//Attempting connection to mongoDB
mongoose.connect(db);
console.log("Your Mind Palace has engaged");
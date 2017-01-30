//Import environment variables using dotenv
require('dotenv').config();

var mongoose = require('mongoose'),
    db = process.env.DB || "mongodb://localhost/arcade";

mongoose.Promise = require('bluebird');
mongoose.connect(db);
console.log("Your Mind Palace has engaged");
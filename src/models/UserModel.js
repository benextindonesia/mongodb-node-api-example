// Importing mongoDB schema
// mongoDB schema is like your table schema on SQL Database
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Creating new schema
var UserSchema = new Schema({
    name:String,
    level:Number
});

// Dont forget to export this module
module.exports = mongoose.model('User',UserSchema);
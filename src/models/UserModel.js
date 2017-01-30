var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:String,
    level:Number
});

module.exports = mongoose.model('User',UserSchema);
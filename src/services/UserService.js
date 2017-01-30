var UserModel = require('../models/UserModel');

var UserService = {
    getUsers:function (callback) {
        UserModel.find({},function (err,data) {
            if(err){
                callback({ status: false, message: err });
                return;
            }
            callback({status:true,message:"PEOPLE_TAKEN",data:data});
        })
    }
};
module.exports = UserService;
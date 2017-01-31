// Importing Dependencies
// On every service file or controller, import the related model.
var UserModel = require('../models/UserModel');

// Creating User Service
var UserService = {


    //Get All Users
    getUsers:function (callback) {
        UserModel.find({},function (err,data) {
            if(err){
                callback({ status: false, message: err });
                return;
            }
            callback({status:true,message:"REQUEST_SUCCESS",data:data});
        })
    },


    // Get Specified User
    getUser:function (id,callback) {
        UserModel.findById(id,function (err,data) {
            if(err){
                callback({ status: false, message: err });
                return;
            }
            callback({status:true,message:"REQUEST_SUCCESS",data:data});
        })
    },


    // Adding New User
    addUser: function (params,callback) {
        var newUser = new UserModel({
            name:params.name,
            level:params.level
        });

        newUser.save(function (err,data) {
            if(err){
                callback({ status: false, message: err });
                return;
            }
            callback({status:true,message:"REQUEST_SUCCESS",data:data});

        })
    },


    // Updating User Profile
    editUser:function (id,params,callback) {
        UserModel.findById(id,function (err,data) {
            if(err){
                callback({ status: false, message: err });
                return;
            }
            data.name = params.name;
            data.level = params.level;
            data.save();
            callback({status:true,message:"REQUEST_SUCCESS",data:data});
        })
    },


    // Deleting User
    deleteUser:function (id,callback) {
        UserModel.remove({_id:id},function (err,data) {
            if(err){
                callback({ status: false, message: err });
                return;
            }
            callback({status:true,message:"REQUEST_SUCCESS"});
        })
    }

};
module.exports = UserService;
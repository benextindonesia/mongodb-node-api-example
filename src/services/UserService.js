var UserModel = require('../models/UserModel');

var UserService = {
    getUsers:function (callback) {
        UserModel.find({},function (err,data) {
            if(err){
                callback({ status: false, message: err });
                return;
            }
            callback({status:true,message:"REQUEST_SUCCESS",data:data});
        })
    },
    getUser:function (id,callback) {
        UserModel.findById(id,function (err,data) {
            if(err){
                callback({ status: false, message: err });
                return;
            }
            callback({status:true,message:"REQUEST_SUCCESS",data:data});
        })
    },
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
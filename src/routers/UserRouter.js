// Router
// Importing Dependencies
// Basically, we are using Express router and extend it with ours

var express = require('express'),
    router = express.Router(),
    UserService = require('../services/UserService');

// method GET
router.get('/users',function (req,res) {
    UserService.getUsers(function (data) {
        res.json(data);
    })
});

// method GET
router.get('/user/:id',function (req,res) {
    UserService.getUser(req.params.id,function (data) {
        res.json(data);
    })
});

// method POST
router.post('/user',function (req,res) {
    UserService.addUser(req.body,function (data) {
        res.json(data);
    });
});

// method PUT
router.put('/user/:id',function (req,res) {
    UserService.editUser(req.params.id,req.body,function (data) {
        res.json(data);
    })
});

//method DELETE
router.delete('/user/:id',function (req,res) {
    UserService.deleteUser(req.params.id,function (data) {
        res.json(data);
    })
});

module.exports = router;
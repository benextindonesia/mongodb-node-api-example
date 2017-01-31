var express = require('express'),
    router = express.Router(),
    UserService = require('../services/UserService');

router.get('/users',function (req,res) {
    UserService.getUsers(function (data) {
        res.json(data);
    })
});
router.get('/user/:id',function (req,res) {
    UserService.getUser(req.params.id,function (data) {
        res.json(data);
    })
});
router.post('/user',function (req,res) {
    UserService.addUser(req.body,function (data) {
        res.json(data);
    });
});
router.put('/user/:id',function (req,res) {
    UserService.editUser(req.params.id,req.body,function (data) {
        res.json(data);
    })
});
router.delete('/user/:id',function (req,res) {
    UserService.deleteUser(req.params.id,function (data) {
        res.json(data);
    })
});

module.exports = router;
var express = require('express'),
    router = express.Router(),
    UserService = require('../services/UserService');

router.get('/users',function (req,res) {
    UserService.getUsers(function (data) {
        res.json(data);
    })
});

module.exports = router;
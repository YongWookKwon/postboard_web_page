var express = require('express');
var path  = require('path')
var router = express.Router();
var main = require('./main/main');
var join = require('./join/join');
var login = require('./login/login');

router.get('/', function(req,res){
    res.sendfile(path.join(__dirname, "../public/main.html"));
})

router.use('/main',main)
router.use('/join',join)
router.use('/login',login)

module.exports = router

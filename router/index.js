var express = require('express')
var app = express()
var router = express.Router();
var path  = require('path')
var main = require('./main/main')
var join = require('./join/index')
var login = require('./login/index')

var logout = require('./logout/index')

//root url
router.use('/', main)
router.use('/main', main)
router.use('/join', join);
router.use('/login', login);
router.use('/logout', logout)
module.exports = router;


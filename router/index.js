var express = require('express')
var router = express.Router();

// require js
var main = require('./main/main')
var join = require('./join/index')
var login = require('./login/index')
var board = require('./board/board');
var logout = require('./logout/index')
var myhome = require('./myhome/index')

//root url
router.use('/', main)
router.use('/main', main)
router.use('/join', join);
router.use('/login', login);
router.use('/logout', logout)
router.use('/board', board)
router.use('/myhome', myhome)

module.exports = router;


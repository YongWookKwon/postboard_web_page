var express = require('express')
var app = express()
var router = express.Router();
var path  = require('path')
var main = require('./main/main')
//var email = require('./email/email')
//var join = require('./join/index')
var login = require('./login/index')

var logout = require('./logout/index')

//root url
router.get('/', function(req,res){
    //  res.send("<h1>hi friend!</h1>"); //웹페이지에 값이 뜨게됨
    console.log('mmain');
      res.sendfile(path.join(__dirname, "../public/main.html"));
      //__dirname 식별자를 사용하면 지금 경로를 불러올수있다.
      // /public/main.html만 치면 main 파일을 불러올수있다.
    });
router.use('/main', main)
//router.use('/email', email)
//router.use('/join', join);
router.use('/login', login);
router.use('/logout', logout)
module.exports = router;


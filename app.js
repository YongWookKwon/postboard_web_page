//require로 express에 관련된 함수를 가져옴
var express = require('express')
var app = express()
var bodyParser = require('body-parser');
//아래 부분은 라우터
var router = require('./router/index')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var session = require('express-session');
var flash = require('connect-flash');

app.listen(3000, function(){
    console.log("start! express server");
});

app.use(express.static('public'))
//정적인 파일을 사용하기위해서 
//main.js같은 파일을 요청하면 받을 수 있게

app.use(bodyParser.json()) // json형태로 받을 때
app.use(bodyParser.urlencoded({extended:true})) //그냥 post로
//ASCII 형태로만 주고 받을 수 있어서 인코딩함
app.set('view engine', 'ejs')
// view engine은 ejs를 쓰겠다라고 설치 후 셋팅

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
// 기본값 사용

app.use(passport.initialize());
app.use(passport.session())
app.use(flash())
//passport 초기화
//각각의 기능 세부적으로 알아보자

app.use(router)

/*

//express가 제공하는 기능
//열기만하면 요청에 대해서 처리를 못해서 에러 발생

console.log('end Server');
//end 가 먼저나옴 (비동기로 처리되서);

//동기적 -> 비동기적



*/
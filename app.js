var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./router/index')

app.listen(3000, function(){
    console.log("port: 3000 , Welcome to WebServer !!");    
})
app.use(express.static('public'))
app.use(router);

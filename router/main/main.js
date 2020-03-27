var express = require('express')
var app = express()
var router = express.Router();
var mysql = require('mysql')
var path  = require('path')

var connection = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	user : 'root',
	password : 'root',
	database : 'postboardUser'
})
connection.connect()

router.get('/', function(req,res){ // url /main으로 갔을 때
	var id = req.user;
	if(!id) res.render('login.ejs');
	else{
		var query = connection.query(`select * from info where insertId='${id}'`, function(err,rows) {
			res.render('main.ejs', {'id' : rows[0].name});
		})
	}
});

module.exports = router;
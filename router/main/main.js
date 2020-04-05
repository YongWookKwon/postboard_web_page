var express = require('express')
var router = express.Router();
var mysql_odbc = require('../../models/db_conn')();
var connection = mysql_odbc.init();

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
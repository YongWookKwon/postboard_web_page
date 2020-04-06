var express= require('express')
var mysql_odbc = require('../../models/db_conn')();
var connection = mysql_odbc.init();
var router = express.Router();

router.get('/', function(req,res){	
    var id = req.user;
	if(!id) res.render('login.ejs');
	else{
        var query = `select * from info where insertId = ${id}`;
        connection.query(query,function(err,rows){
            var name = rows[0].name;
            var ID = rows[0].ID;
            var PW = "비공개";
            res.render('myhome.ejs', {'name':name,'ID':ID, 'PW':PW});
        });
    }
})

router.post('/update', function(req,res){
    var id = req.user;
    if(!id) res.render('login.ejs');
	else{
        var defaultPw = req.body.defaultPW;
        var pw = req.body.PW;
        query = `update info set pw = '${pw}' where insertId = ${id} and pw = '${defaultPw}' `
        connection.query(query, function(err,rows){
            if(rows.affectedRwos ==0){
                res.send("<script>alert('패스워드가 일치하지 않습니다.');history.back();</script>");
            }else{
                res.send("<script>alert('정상적으로 변경되었습니다..');location.href='/'</script>")
            }
        })
    }
    //var query = "update board set  where  idx=? and passwd=?"
})
router.get('/update', function(req,res){    
    var user = req.user;
    if(!user) res.render('login.ejs');
    else{
        var query = `select * from info where insertId = ${user}`;
        connection.query(query,function(err,rows){
            var password = rows[0].PW;
            res.render('infoupdate.ejs', {'pw' : password});
        })
    }
})

module.exports = router;
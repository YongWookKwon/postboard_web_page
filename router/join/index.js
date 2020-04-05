var express = require('express')
var router = express.Router()
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var mysql_odbc = require('../../models/db_conn')();
var connection = mysql_odbc.init();

router.get('/', function(req,res) {
	var msg;
	var errMsg = req.flash('error')
	if(errMsg) msg = errMsg;
	res.render('join.ejs', {'message' : msg});
})

//passport.serialize
passport.serializeUser(function(user, done) {
	console.log('passport session save : ', user.id)
  done(null, user.id)
});

passport.deserializeUser(function(id, done) {
	console.log('passport session get id: ', id)
	done(null, id);
})

passport.use('local-join', new LocalStrategy({
      usernameField: 'username',
	  passwordField: 'password',
	  passReqToCallback : true
	}, function(req, username, password, done) {
		var query = connection.query('select * from info where ID=?', [username], function(err,rows) {
			if(err) return done(err);

			if(rows.length) {
				console.log('existed user')
				return done(null, false, {message : 'your email is already used'})
			} else {
				var sql = {name:req.body.name,ID: username, PW:password};
				var query = connection.query('insert into info set ?', sql, function(err,rows) {
					if(err) throw err
					return done(null, {'username' : username, 'id' : rows.insertId});
				})

			}
		})
	}
));

router.post('/', passport.authenticate('local-join', {
				successRedirect: '/main',
				failureRedirect: '/join',
				failureFlash: true })
)


module.exports = router;
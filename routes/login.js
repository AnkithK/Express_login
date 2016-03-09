var ejs = require("ejs");
var mysql = require('./mysql');

exports.loginsuccess = function loginsuccess(req, res) {
	res.render('loginsuccess');
};

exports.loginfail = function loginfail(req, res) {
	res.render('loginfail');
};

exports.login = function login(req,res)
{	
	
	var userid = req.param("uid");
	var password = req.param("pwd");
	
	console.log("Params are "+userid+" "+password);
	var getuser = "select * from user where email = '"+userid+"' and pass = '"+password+"'";

	console.log("Query is:"+getuser);
	
	mysql.executequery(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){								
				console.log("valid Login");	
				res.json({
					"code": 200,
					"value" : "success",
					"data" : results
				});
			}
			else {    
				console.log("Invalid Login");
				res.json({
					"code": 404,
					"value" : "failure"
				});
			}
		}  
	},getuser);

};
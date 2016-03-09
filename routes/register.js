var ejs = require("ejs");
var mysql = require('./mysql');

exports.registersuccess = function registersuccess(req, res) {
	res.render('registersuccess');
};

exports.registerfail = function registerfail(req, res) {
	res.render('registerfail');
};

exports.register = function register(req,res)
{	
	
	var fname = req.param("fname");
	var lname = req.param("lname");
	var email = req.param("mail");
	var password = req.param("pass");
	
	console.log("Params are "+fname+" "+lname+" "+email+" "+password);
	var adduser = "insert into user values('"+fname+"','"+lname+"','"+email+"','" + password +"')";

	console.log("Query is:"+adduser);
	
	mysql.executequery(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){								
				console.log("valid register");	
				res.json({
					"code": 200,
					"value" : "success"
				});
			}
			else {    
				console.log("Invalid register");
				res.json({
					"code": 404,
					"value" : "failure"
				});
			}
		}  
	},adduser);

};

var ejs = require('ejs');
var mysql = require('mysql');
function getConnection(){
	var connection = mysql.createConnection({
		
		host : 'localhost',
		user : 'root',
		password : 'password',
		database : 'users' 
	});
	return connection ;
}

var executequery = function(callback, query){
	//var con = getSQLConnection();
	var con = getConnection();
	con.query(query , function(err, rows, fields) {
			if (err) {
				console.log("ERROR in fetching the data");
			} else {
				console.log("no rows");
				callback(err,rows);
			}
		});
	con.end();
	
};

exports.executequery=executequery;

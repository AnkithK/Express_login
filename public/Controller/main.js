var Contacts = angular.module('contacts',[]);
Contacts.controller('MainCtrl', function($scope,$http) {
	console.log("Hello");
	 $scope.register = function(){
			console.log("Hello register access");
			var fname=$scope.fname;
			var lname=$scope.lname;
			var mail=$scope.mail;
			var pass=$scope.pass;
			console.log(fname+" "+lname+" "+mail+" "+pass);
			
			$http({
				method : 'POST',
				url : '/register',
				data : {
					"fname" :fname,
					"lname" :lname,
					"mail" :mail,
					"pass" :pass}
			}).success(function(resp) {
				if(resp.code==200){
					console.log("Sucess");
					window.location.assign("/registersuccess");
				}else{
					window.location.assign("/registerfail");
				}
			}).error(function(err) {
				console.log("Error");
			});
	 }
	 
	 $scope.login = function(){
			console.log("Hello login access");
			var uid=$scope.uid;
			var pwd=$scope.pwd;
			
			console.log(uid+" "+pwd);
			
			$http({
				method : 'POST',
				url : '/login',
				data : {
					"uid" :uid,
					"pwd" :pwd}
			}).success(function(resp) {
				if(resp.code==200){
					console.log(resp.data);
					console.log("Sucess");
					window.location.assign("/loginsuccess");
				}
				else{
					window.location.assign("/loginfail");
				}
			}).error(function(err) {
				console.log("Error");
			});
	 }
});

var connect = require('connect');

module.exports = function miniHarp(port){
	
	var app = connect();
	if(port){
		console.log("Starting mini-harp on http://localhost: 4000");
	}else{
		console.log("Starting mini-harp on http://localhost: " + port);
	}
	return app;
}


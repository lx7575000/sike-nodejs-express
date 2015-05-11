var connect = require('connect');
var url = require('url');
var http = require('http');
var serveStatic = require('serve-static');

module.exports = function miniHarp(port){
	
	var app = connect();
	if(port){
		console.log("Starting mini-harp on http://localhost:" + port);
	}else{
		console.log("Starting mini-harp on http://localhost: 4000");

	}
	return function(){
		app.use(function (req, res, next){
		var pathname = url.parse(req.url).pathname;
		var date = new Date();
		if(req.method === 'POST' && pathname === '/current-time'){
			res.end('Now is ' + date + '\n');
			next();
		}else{
			res.end('Gannot Get ' + pathname + '\n');
			next();
		}
		})
		.use(function(req, res){
			res.end('Good bye everyone ...\n');
		})
		.listen(port);
	};
}


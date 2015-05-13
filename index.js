var connect = require('connect');
var url = require('url');
var http = require('http');
var serveStatic = require('serve-static');
var finalhandler = require('finalhandler');

module.exports = function miniHarp(port, root){
	var serve = serveStatic(__dirname || root, {hidden : false});
	var app = connect();

	return function(){
		if(port){
			console.log("Starting mini-harp on http://localhost:" + port);
		}else{
			console.log("Starting mini-harp on http://localhost: 3000");
		}

		app.use(function(req, res, next){
			var date = new Date();
			var pathname = url.parse(req.url).pathname;
			if(req.method === 'POST' && pathname === '/current-time'){
				res.end('Now the time is ' + date);
				console.log('Has shown the current time !');
				next();
			}else{
				console.log('Has shown the file content !');
				var done = finalhandler(req, res);
				serve(req, res, done);
			}
		})
		.listen(3000);
	};
}
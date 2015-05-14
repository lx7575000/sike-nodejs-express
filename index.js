var connect = require('connect');
var serveStatic = require('serve-static');
var jade = require('./lib/processor/jade');
var less = require('./lib/processor/less');

module.exports = function(path){
	var app = connect();
	return app.use(jade(path))
			   .use(less(path))
			  	.use(serveStatic(path));
}
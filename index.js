var connect = require('connect');
var serveStatic = require('serve-static');
var jade = require('./lib/processor/jade');
var less = require('./lib/processor/less');
var rewriteUrl = require('./lib/processor/rewriteUrl');

module.exports = function(path){
	var app = connect();
	return app.use(rewriteUrl())
			  .use(jade(path))
			   .use(less(path))
			  	.use(serveStatic(path));
}
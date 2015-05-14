var connect = require('connect');
var serveStatic = require('serve-static');
var jade = require('./lib/processor/jade');
var less = require('./lib/processor/less');
var rewriteUrl = require('./lib/processor/rewriteUrl');
var prevent = require('./lib/processor/prevent');

module.exports = function(path){
	var app = connect();
	return app.use(rewriteUrl())
			  .use(prevent())
			  .use(jade(path))
			   .use(less(path))
			  	.use(serveStatic(path));
}
var connect = require('connect');
var serveStatic = require('serve-static');
var jade = require('./lib/processor/jade');


module.exports = function(path){
	var app = connect();
	return app.use(jade(path))
			  .use(serveStatic(path));
}
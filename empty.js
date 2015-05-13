// var connect = require('connect');
// var url = require('url');
// var http = require('http');
// var serveStatic = require('serve-static');

// // connect()
// // 	.use(function (req, res, next){
// // 	var pathname = url.parse(req.url).pathname;
// // 	var date = new Date();
// // 	if(req.method === 'POST' && pathname === '/current-time'){
// // 		res.end('Now is ' + date + '\n');
// // 		next();
// // 	}else{
// // 		res.end('Gannot Get ' + pathname + '\n');
// // 		next();
// // 	}
// // 	})
// // 	.use(function(req, res){
// // 		res.end('Good bye everyone ...\n');
// // 	})
// // 	.listen(4000);

// // console.log('http://localhost:4000/current-time');

var finalhandler = require('finalhandler');
var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic( __dirname, {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function(req, res){
  console.log('The root is ' + __dirname);
  var done = finalhandler(req, res)
  serve(req, res, done)
})

// Listen
server.listen(4000)
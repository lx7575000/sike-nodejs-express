var connect = require('connect');
var url = require('url');
var http = require('http');

connect()
	.use(function (req, res, next){
	var pathname = url.parse(req.url).pathname;
	var date = new Date();
	if(req.method === 'POST' && pathname === '/current-time'){
		res.end('Now is ' + date + '\n');
		next();
	}else{
		// res.end('Please query the date with POST method and you shoul visit current-time');
		res.end('Gannot Get ' + pathname + '\n');
		next();
	}
	})
	.use(function(req, res){
		res.end('Good bye everyone ...\n');
	})
	.listen(4000);

console.log('http://localhost:4000/current-time');
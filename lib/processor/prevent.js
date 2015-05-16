module.exports = prevent;

var path = require('path');


function prevent(){
	return function(req, res, next){
		var extname = path.extname(req.url);
		if(extname === '.jade' || extname === '.less'){
			res.writeHead(404, {"Content-Type": 'text/plain'});
			res.end();
			next();
		}
	}
}
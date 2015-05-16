module.exports = makeLess;

var path = require('path');
var fs = require('fs');
var less = require('less');

function makeLess(root){
	return function(req, res, next){
		fs.readFile(root + req.url, {encoding : 'utf8'}, function(err, data){
			if(!err){
				//It is normal !
				next();
			}else{
				if(path.extname(req.url) === '.css'){
					fs.readFile(root + '/' + path.basename(req.url, '.css') + '.less', {encoding: 'utf8'}, function(err, data){
										if(err){
											next();
										}else{
											    less.render(data, function(err, output){
												// res.setHeader("Content-Length", output.length);	
												// res.setHeader("Content-Type","text/css; charset=UTF-8");
												respose.writeHead(200, {
                      								"Content-Length": output.length,
                      								"Content-Type": "text/html; charset=UTF-8"
 							                   });
												res.end(output);
											});
										}
									});
				}else{
					next();
				}
			}
		});
	}
}
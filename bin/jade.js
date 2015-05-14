var jade = require('jade');
var fs = require('fs');
var path = require('path');


function makeJade(root){
	return function(req, res, next){
		fs.readFile(root + req.url, {encoding: 'utf8'}, function(err, data){
			if(!err){
				next();
			}else{
				if(path.extname(req.url) === '.html'){
					fs.readFile(root + '/' + path.basename(req.url, '.html') + '.jade', {encoding: 'utf8'}, function(err, data){
										//path.basename 返回指定文件名，且去掉后面的.html后缀名
						if(err){
							next();
						}else{
							var html =jade.render(data);
							res.setHeader('Content-Length', body.length);
							res.setHeader('Content-Type', 'text/html; charset=UTF-8');
							res.end(body);
						}
					} )
				}else{
					next();
				}
			}
		});
	}
}


module.exports = makeJade;
module.exports = makeJade;

var path = require('path');
var fs = require('fs');
var jade = require('jade');

function makeJade(root){
	//因为是想要作为中间件来使用，所以要用这种格式来返回模块函数
	return function(req, res, next){
		//这个模块的作用是使用jade引擎将模板转化为html文档,传入的root参数是用于说明当前位置
		fs.readFile(root + req.url, {encoding: 'utf8'}, function(err, data){
			if(!err){
				//我们是想通过查找后缀名的方式读取内容，所以要处理的是出错的情况。
				//这时候处理的是正确读取了html文档
				next();
			}else{
				if(path.extname(req.url) === '.html'){
					//当请求读取的是html文档的时候，但是我们没有这个名称的html文件，
					//所以我们将它通过path.basename方式转换为filename.jade的形式，看看有没有jade模板
					fs.readFile(root + '/' + path.basename(req.url, '.html') + '.jade',
									{encoding:'utf8'},
									function(err, data){
										if(err){
											//404
											next();
										}else{
											var body = jade.render(data);
											res.setHeader('Content-Length', 26);
											res.setHeader('Content-Type', "text/html; charset=UTF-8");
											// res.setHeader("Content-Length", body.length);
											// res.setHeader("Content-Type","text/html; charset=UTF-8");
											res.end(body);
										}
									})
				}else{
					next();
				}
			}
		});
	}
}

#!/usr/bin/env nodemon
var createMiniHarp = require("../index.js");
var argv = require('minimist')(process.argv.slice(2));
var port = argv._['port'] ? argv._['port'] : 4000;
var path = argv._[0] ? argv._[0] : process.cwd();//获得地址

var app = createMiniHarp(path);
console.log('Starting mini-harp on http://localhost: ' + port);
app()
	.listen(port);
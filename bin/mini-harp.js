#!/usr/bin/env nodemon
var createMiniHarp = require("../index.js");
var parsedArgv = require('minimist')(process.argv.slice(2));


var app = createMiniHarp(); 
app();
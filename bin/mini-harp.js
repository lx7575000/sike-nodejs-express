#!/usr/bin/env nodemon
var createMiniHarp = require("../index.js");
var parsedArgv = require('minimist')(process.argv.slice(2));

var port = parseInt(parsedArgv._);
var app = createMiniHarp(port); 
app();
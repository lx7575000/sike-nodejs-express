#!/usr/bin/env node
var createMiniHarp = require("../index.js");
var parsedArgv = require('minimist')(process.argv.slice(2));


app = createMiniHarp(parsedArgv._);
var port =  parseInt(parsedArgv._);
app.listen(port);
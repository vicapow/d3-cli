#!/usr/local/bin/node

var repl = require('repl');
var ctx = repl.start('> ').context;
var fs = require('fs');

ctx.load = function(str) {
  return fs.readFileSync(str).toString();
};

ctx.d3 = require('d3');

'use strict';
var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("apalikasi Rest API berjalan")
};

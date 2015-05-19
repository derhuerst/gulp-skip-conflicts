'use strict';
var through2 =	require('through2');
var fs =		require('fs');







function factory (){
	return through2.obj(function (file, encoding, callback) {
		fs.exists(file.path, function (exists) {
			if (exists)
				return callback();
			return callback(null, file);
		});
	});
}



module.exports = factory;
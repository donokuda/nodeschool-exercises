var fs = require('fs'),
    path = require('path');

module.exports = function(dirName, extFilter, callback) {
  fs.readdir(dirName, function(err, fileList) {
    var matchedFiles = [];

    if (err)
      return callback(err);

    for(i = 0; i < fileList.length; i++) {
      if (path.extname(fileList[i]) === "." + extFilter) {
        matchedFiles.push(fileList[i]);
      }
    }

    callback(null, matchedFiles);
  });
}

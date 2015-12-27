var list = require('./list-module');

var dirName = process.argv[2],
    extName = process.argv[3];

list(dirName, extName, function(err, matchedFiles) {
  matchedFiles.map(function(file) {
    console.log(file);
  });
});

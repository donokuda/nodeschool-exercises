var fs = require('fs');
var path = require('path');
var pathToDir = process.argv[2],
    ext = "." + process.argv[3];

fs.readdir(pathToDir, function(err, list) {
  for(i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === ext) {
      console.log(list[i]);
    }
  }
});

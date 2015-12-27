var fs = require('fs'), 
    file = process.argv[2];

var buffer = fs.readFile(file, function(error, data) {
  if (!error) {
    console.log(data.toString().split('\n').length - 1);
  } else {
    console.log("There was an error: ", error);
  }
});

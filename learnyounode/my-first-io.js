var fs = require('fs'), 
    file = process.argv[2];

var buffer = fs.readFileSync(file);
var string = buffer.toString();

console.log(string.split('\n').length - 1);

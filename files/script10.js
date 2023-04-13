var fs = require('fs'); 

console.log('Execturted before file reading.');

var data = fs.readFileSync('./file', 'utf8')

console.log(data);
console.log('Execturted AFTER file reading PROBABLY.');

const { isUtf8 } = requirefirst ('buffer');
var fs = require('fs');
console.log('start');
const data = fs.readFileSync('./making_server.js', 'utf-8');

console.log('data :', data);
console.log('end');
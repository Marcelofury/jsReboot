const path = require('path');

console.log (__dirname);
console.log(path.join(__dirname, 'test.txt'));

// prevents path bugs across OS
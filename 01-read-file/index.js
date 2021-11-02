const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'text.txt');
const res = fs.createReadStream(file);
res.on('data', (e) => console.log(String(e)));
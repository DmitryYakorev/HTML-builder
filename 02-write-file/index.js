const fs = require("fs");
const path = require("path");
const stdin = process.stdin;
const name = path.join(__dirname, 'text.txt');
const stdout = process.stdout;
const output = fs.createWriteStream(name, 'utf-8');

console.log('\nEnter your text here\n');

stdin.on('data', (e) => {
  output.write(e);
  console.log('\nTo exit press Ctrl+c\n');
});


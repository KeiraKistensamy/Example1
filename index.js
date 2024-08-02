// Import the fs module
const fs = require('fs');

// 1 data.txt
fs.writeFile('data.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('Content written to data.txt');
});

// 2 data.txt
fs.writeFile('data.txt', 'This is the second content', (err) => {
  if (err) throw err;
  console.log('Second content written to data.txt');
});

// Check if the second content overrode the previous one
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Content of data.txt:', data);
});

fs.appendFile('data.txt', '\nThis is the appended content', (err) => {
  if (err) throw err;
  console.log('Content appended to data.txt');
});
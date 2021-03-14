//Runner Code:
//node fetcher.js http://www.example.edu/ ./index.html
//Result: Downloaded and saved 3261 bytes to ./index.html

const request = require('request');
const fs = require('fs');

const URL = process.argv[2];
const path = process.argv[3];


request(URL, function(error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);

  if (error) {
    console.log('error from request');
    return;
  }

  if (response && response.statusCode !== 200) {
    console.log('bad statusCode');
    return;
  }

  fs.writeFile(path, body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });

});


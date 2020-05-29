const http = require('http');
const fs = require("fs");

//create a server
let server = http.createServer(function (req, res) {
	// res.write('Hello World!'); // Sends a response back to the client
    // res.end(); // Ends the response
    
  if (req.url === '/') {
    fs.readFile('index.html',
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    );
  }
  if(req.url === '/script.js'){
    fs.readFile('script.js',
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(content);
      }
    );
  }
  if(req.url === '/style.css'){
    fs.readFile('style.css',
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(content);
      }
    );
  }

});
server.listen(3000); // The server listens on port 3000


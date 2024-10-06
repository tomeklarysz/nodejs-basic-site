const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const { url } = req;
  filename = '/home/tomek/learn-backend/basic-site/404.html';
  switch (url) {
    case '/':
      filename = '/home/tomek/learn-backend/basic-site/index.html';
      break;
    case '/about':
      filename = '/home/tomek/learn-backend/basic-site/about.html';
      break;
    case '/contact-me':
      filename = '/home/tomek/learn-backend/basic-site/contact-me.html';
      break;
  }
  fs.readFile(filename, (err, data) => {
    if (err) throw err;
    if (filename === '/home/tomek/learn-backend/basic-site/404.html') {
      res.writeHead(400, {'Content-Type': 'text/html'});
    }
    else {
      res.writeHead(200, {'Content-Type': 'text/html'});
    } 
    res.write(data);
    res.end();
  });
}).listen(8080);
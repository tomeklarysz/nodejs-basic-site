// const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('public'))

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

// http.createServer((req, res) => {
//   const { url } = req;
//   filename = '404.html';
//   switch (url) {
//     case '/':
//       filename = 'index.html';
//       break;
//     case '/about':
//       filename = 'about.html';
//       break;
//     case '/contact-me':
//       filename = 'contact-me.html';
//       break;
//   }
//   fs.readFile(filename, (err, data) => {
//     if (err) throw err;
//     if (filename === '/home/tomek/learn-backend/basic-site/404.html') {
//       res.writeHead(400, {'Content-Type': 'text/html'});
//     }
//     else {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//     } 
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.write('Welcome to the PillScription Website!');
  } else if (req.url === '/about') {
    res.write('About PillScription: We provide medication subscriptions.');
  } else if (req.url === '/contact') {
    res.write('Contact us at contact@pillscription.com');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
  }
  
  res.end();
}).listen(8080);

const fs = require('fs');


const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
if (url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="info" /><button type="submit">send</button></form></body>');
    res.write('</html>');
    return res.end();
   }   

   if (url === '/message' && method === 'POST'){
     const body = [];
     req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
     });
     return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFile('message.txt', message, err => {
            res.writeHead(302, { Location: '/'})
            return res.end();    
        });
     });
   }

    console.log(req);
    console.log(req.url, req.method, req.headers);
   // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node Application</h1></body>');
    res.write('</html>');
    res.end();
}

exports.handler = requestHandler;



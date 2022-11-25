const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader('content-type','text/plane');
    response.end('bienvenido al servidor! ');

});

server.listen(port,hostname,() =>{
   console.log('servidor corriendo en http://'+hostname +':' +port);
});
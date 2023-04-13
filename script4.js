var server = require('http');// http is a module

server.createServer(engine).listen(1337);

function engine(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain', 'yoyoy': 'checkitout'});
    response.end('Hey there, from the server! :D');
}
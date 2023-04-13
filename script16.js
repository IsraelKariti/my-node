var express = require('express');
const { request } = require('http');
var path = require('path');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.listen(1337, function(){
    console.log('listening at port 1337');
});

app.get('/', function(requested, response){
    console.log('url is: '+ requested.url);
    response.sendFile('index.html', {root: path.join(__dirname, './files')});
});
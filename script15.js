var express = require('express');
var app = express();


app.listen(1337, function(){
    console.log('listening at port 1337');
});

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/helloThere', function(requested, response){
    response.send('Hello thre, from express');
});




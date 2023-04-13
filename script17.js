var express = require('express');
const { request } = require('http');
var path = require('path');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.listen(1337, function(){
    console.log('listening at port 1337');
});

const linkPairs = {
    "/goog": "https://www.google.co.il/",
    "/face": "https://www.facebook.com/"
}

app.get(/^(.+)/, function(requested, response){
    if(Object.keys(linkPairs).indexOf(requested.url) == -1)
    {
        console.log('unknown address');
    }
    else
    {
        var dest = linkPairs[requested.url];
        response.redirect(dest);
    }
});
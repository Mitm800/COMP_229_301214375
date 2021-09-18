var connect = require('connect');
var http = require('http');

var app = connect();

console.log("Running");

function helloworld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
}


function byeworld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bye world');
}

app.use('/hello', helloworld);
app.use('/bye',byeworld);

app.listen(3000);
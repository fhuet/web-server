var express = require('express');
var app = express();
var PORT = 3000;

// app.get('/', function (req, res) {
//     res.send('Hello Express!');
// });

var middleware = {
    requireAuthentication: function(req,res,next) {
        console.log('Private route hit !');
        next();
    },
    logger: function(req, res, next) {
        // var reqDate = new Date().toString();
        console.log('Request: ' + new Date().toString() + ':' + req.method + ' ' + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);

//app.use(middleware.requireAuthentication);

app.get('/About', middleware.requireAuthentication, function (req, res) {
    res.send('Let\'s talk about us Baby!!');
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);
// / about
// About Us

app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT + '!');
});
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

//app.use(middleware.requireAuthentication);

app.get('/About', middleware.requireAuthentication, function (req, res) {
    res.send('Probably need something here too');
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);
// / about
// About Us

app.listen(PORT, function () {
    console.log('Express server started on port ' + PORT + '!');
});
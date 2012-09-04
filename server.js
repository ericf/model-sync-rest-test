var express = require('express'),
    path    = require('path');

var app    = express(),
    port   = process.env.PORT || 3000,
    pubDir = path.join(__dirname, 'public');

app.configure(function () {
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function (req, res, next) {
    res.sendfile(path.join(pubDir, 'index.html'));
});

app.get('/users/:id', function (req, res, next) {
    res.json({
        id       : req.params.id,
        username : 'ericf',
        firstname: 'Eric',
        lastname : 'Ferraiuolo'
    });
});

app.listen(port, function () {
    console.log('App server listening on port ' + port);
});

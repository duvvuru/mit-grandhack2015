var connect = require('connect');
var serveStatic = require('serve-static');
var path = require('path');

connect().use(serveStatic(path.join(__dirname, 'www'))).listen(8080);
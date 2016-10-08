var fs = require('fs');
var url = require('url');
module.exports=function (req, res, next) {
    var urlObj = url.parse(req.url, true);
    switch (urlObj.pathname) {
        case '/api/party.php':
            res.setHeader('Content-Type', 'application/json');
            fs.readFile('./mock/party.json', function (err, data) {
                res.end(data);
            });
            return;
        case '/api/pmore.php':
            res.setHeader('Content-Type', 'application/json');
            fs.readFile('./mock/pmore.json', function (err, data) {
                res.end(data);
            });
            return;
        case '/api/pmore2.php':
            res.setHeader('Content-Type', 'application/json');
            fs.readFile('./mock/pmore2.json', function (err, data) {
                res.end(data);
            });
            return;
        case '/api/choose1.php':
            res.setHeader('Content-Type', 'application/json');
            fs.readFile('./mock/choose1.json', function (err, data) {
                res.end(data);
            });
            return;
    }
    next();
};
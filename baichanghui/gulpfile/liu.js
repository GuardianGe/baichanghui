module.exports=function (req, res, next) {
  var urlObj = url.parse(req.url, true);
  switch (urlObj.pathname) {
    case '/api/meet.php':
      res.setHeader('Content-Type', 'application/json');
      fs.readFile('./mock/meeting.json', function (err, data) {
      fs.readFile('./mock/mock1.json', function (err, data) {
        res.end(data);
      });
      return;
    case '/api/seeMore.php':
        res.setHeader('Content-Type', 'application/json');
        fs.readFile('./mock/more.json', function (err, data) {
          res.end(data);
      });
      return;
      case '/api/seeMore2.php':
          res.setHeader('Content-Type', 'application/json');
          fs.readFile('./mock/more2.json', function (err, data) {
            res.end(data);
        });
        return;
    case '/api/choose1.php':
        res.setHeader('Content-Type', 'application/json');
        fs.readFile('./mock/choose1.json', function (err, data) {
          res.end(data);
      });
      return;
      case '/api/choose2.php':
          res.setHeader('Content-Type', 'application/json');
          fs.readFile('./mock/choose2.json', function (err, data) {
            res.end(data);
        });
        return;
  }
  next();
}
}

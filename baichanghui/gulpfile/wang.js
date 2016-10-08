module.exports=function (req, res, next) {
  var urlObj = url.parse(req.url, true);
  switch (urlObj.pathname) {
    case '/api/list.php':
      res.setHeader('Content-Type', 'application/json');
      fs.readFile('./mock/mock1.json', function (err, data) {
        res.end(data);
      });
      return;
  }
  next();
}

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'server' });
});

/*router.get('/foo', (request, response) => {
  const result = { result: 'Success'};
  /* this line below sends back the simple chunk of JS defined
   * inside the result const above.
  response.send(result);
});*/

module.exports = router;

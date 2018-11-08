var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', { title: 'server' });
});

router.get('/foo', (request, response) => {
    'use strict';
    response.send({result: 'success'});
});

module.exports = router;

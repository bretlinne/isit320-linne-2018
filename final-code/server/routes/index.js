var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Final Project Server',
        author: 'Bret Linne'
    });
});

router.get('/run-foo', (request, response) => {
    'use strict';
    response.send({ result: 'foo route called' });
});

router.get('/run-bar', (request, response) => {
    'use strict';
    response.send({ result: 'bar route called' });
});

router.get('/run-qux', (request, response) => {
    'use strict';
    response.send({ result: 'qux route called' });
});

router.get('/run-farq', (request, response) => {
    'use strict';
    response.send({ result: 'farq route called' });
});

router.get('/run-snafu', (request, response) => {
    'use strict';
    response.send({ result: 'snafu route called' });
});


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Midterm Server',
        author: 'Bret Linne'
    });
});

router.get('/foo', (request, response) => {
    'use strict';
    'use strict';
    /*(result) => { 'use strict';
        console.log(JSON.stringify(result, null, 4));
        response.send(result);*/
    response.send({ result: 'Success!' });
});

module.exports = router;

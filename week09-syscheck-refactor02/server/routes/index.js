var express = require('express');
var router = express.Router();

/* GET home page. */
// This is called when we go to the port that the server's running on
// at the localhost.  i.e. we browse to localhost:30026, we ought to get this
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'System Check Refactor02 Server',
        author: 'Bret Linne'
    });
});

router.get('/foo', (request, response) => {
    'use strict';
    /*(result) => {
        console.log(JSON.stringify(result, null, 4));
        response.send(result);*/
    response.send({ result: 'Success!' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Final EC2 Copy File Server',
        author: 'Bret Linne'
    });
});
module.exports = router;

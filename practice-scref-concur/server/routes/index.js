var express = require('express');
var router = express.Router();
//const Client = require('ssh2').Client;

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Practice System Check Refactor Server',
        author: 'Bret Linne'
    });
});

module.exports = router;

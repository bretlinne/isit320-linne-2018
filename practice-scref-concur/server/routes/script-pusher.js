var express = require('express');
var router = express.Router();

const spawn = require('child_process').spawn;

let allData = '';

const systemCheck = () => {
    return new Promise(function(resolve, reject) {
        console.log('Run CpuInfo on LocalSystem', process.env.SETUP_LINUXBOX);

        const pushScript = spawn(process.env.SETUP_LINUXBOX + '/CpuInfo');

        pushScript.stdout.on('data', data => {
            console.log(`child stdout:\n${data}`);
            allData += 'PUSH-SCRIPT: ' + data;
            //console.log('PUSH', data);
        });

        pushScript.stderr.on('data', data => {
            console.log(`child stderr:\n${data}`);
            allData += 'PUSH-SCRIPT: ' + data;
            //console.error('PUSH', data);
        });

        pushScript.on('close', code => {
            resolve({
                result: 'success',
                allData: allData,
                code: code
            });
        });

        pushScript.on('error', code => {
            reject({
                result: 'error',
                code: code
            });
        });
    });
};

router.get('/system-check', function(request, response) {
    'use strict';
    systemCheck()
        .then(result => {
            console.log(JSON.stringify(result, null, 4));
            response.send(result);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });
});
module.exports = router;

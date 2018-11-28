var express = require('express');
var router = express.Router();

const spawn = require('child_process').spawn;
const uptimePath = '/usr/bin/uptime';
let allData = '';

const runSystemTool = () => {
    return new Promise(function(resolve, reject) {
        console.log('Run Uptime on LocalSystem', uptimePath);
        /**/
        const invokeCommand = spawn(uptimePath);
        invokeCommand.stdout.on('data', data => {
            console.log(`child stdout:\n${data}`);
            allData += 'UPTIME: ' + data;
        });

        invokeCommand.stderr.on('data', data => {
            console.log(`child stderr:\n${data}`);
            allData += 'UPTIME: ' + data;
            //console.error('PUSH', data);
        });

        invokeCommand.on('close', code => {
            resolve({
                result: 'success',
                allData: allData,
                code: code
            });
        });

        invokeCommand.on('error', code => {
            reject({
                result: 'error',
                code: code
            });
        });
    });
};
const runScript = script => {
    return new Promise(function(resolve, reject) {
        console.log('Run CpuInfo on LocalSystem', process.env.SETUP_LINUXBOX);

        //const pushScript = spawn(process.env.SETUP_LINUXBOX + '/CpuInfo');
        const pushScript = spawn(process.env.SETUP_LINUXBOX + '/' + script);
        console.log('bar');
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

router.get('/foo', (request, response) => {
    'use strict';
    response.send({
        file: 'script-pusher.js',
        result: 'success',
        status: 'script-pusher works'
    });
});

router.get('/run-script', function(request, response) {
    'use strict';
    console.log('QUERY: ', request.query.script);
    allData = '';
    runScript(request.query.script)
        .then(result => {
            console.log(JSON.stringify(result, null, 4));
            response.send(result);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });
});

router.get('/run-system-tool', function(request, response) {
    'use strict';
    console.log('QUERY: ', request.query.script);
    allData = '';
    runSystemTool(request.query.script)
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

var express = require('express');
var router = express.Router();

const spawn = require('child_process').spawn;
const uptimePath = '/usr/bin/uptime';
const DUMMY_SYSTEM_FUNCTION_PATH = '/usr/bin/time';
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

// this is stubbed out based on the Run-system-tool function above.
// likely it should be based on the runScript function, since i think the
// copyGetStarted is a Charlie Script.  Lets just get it stubbed out for now.
const copyGetStarted = () => {
    return new Promise(function(resolve, reject) {
        console.log('Run DUMMY_TIME on LocalSystem', DUMMY_SYSTEM_FUNCTION_PATH);
        /**/
        const invokeCommand = spawn(DUMMY_SYSTEM_FUNCTION_PATH);
        invokeCommand.stdout.on('data', data => {
            console.log(`child stdout:\n${data}`);
            allData += 'DUMMY_COPYGETSTARTED (TIME): ' + data;
        });

        invokeCommand.stderr.on('data', data => {
            console.log(`child stderr:\n${data}`);
            allData += 'DUMMY_COPYGETSTARTED (TIME): ' + data;
            //console.error('PUSH', data);
        });

        invokeCommand.on('close', code => {
            resolve({
                result: 'DUMMY_COPYGETSTARTED (TIME) success',
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

    // INCLUDING THE request.query.script AS A PARAMETER CURRENTLY DOES NOTHING
    //runSystemTool(request.query.script)

    runSystemTool()
        .then(result => {
            console.log(JSON.stringify(result, null, 4));
            response.send(result);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });
});

router.get('/copy-get-started', function(request, response) {
    'use strict';
    console.log('QUERY: DUMMY-COPYGETSTARTED ROUTER');
    allData = '';
    copyGetStarted()
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

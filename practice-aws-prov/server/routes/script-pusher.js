var express = require('express');
var router = express.Router();
const spawn = require('child_process').spawn;
const uptimePath = '/usr/bin/uptime';
const DUMMY_SYSTEM_FUNCTION_PATH = '/usr/bin/time';
const elfUtils = require('elven-code').elfUtils;
let allData = '';

const getSshIp = () => {
    return new Promise(function(resolve, reject) {
        elfUtils
            .readFile(process.env.HOME + '/.ssh/config')
            .then(content => {
                //var pattern = new RegExp('Host ec2-bc[\\s\\S]\\s*(.*)[\\s\\S]\\s*(.*)[\\s\\S]\\s*(.*)[\\s\\S]\\s*(.*)');
                var pattern = new RegExp('Host ec2-bc\n\t(.*)\n\t(.*)\n\t(.*)\n\t(.*)');
                const result = {};
                const match = content.result.match(pattern);
                //console.log('BEFORE FOR LOOP');

                for (let i = 1; i < 5; i++) {
                    if (match[i].startsWith('HostName')) {
                        var hostPattern = new RegExp('HostName\\s(.*)');
                        result.hostName = match[i].match(hostPattern)[1];
                    }
                    if (match[i].startsWith('IdentityFile')) {
                        const idPattern = new RegExp('IdentityFile\\s(.*)');
                        const path = match[i].match(idPattern)[1];
                        result.identityFile = path.substring(
                            path.lastIndexOf('/') + 1,
                            path.length
                        );
                    }
                }
                //console.log('AFTER FOR LOOP', result);

                resolve(result);
            })
            .catch(reject);
    });
};

/*
const runSystemTool = () => {
    return new Promise(function(resolve, reject) {
        console.log('Run Uptime on LocalSystem', uptimePath);
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
*/
/*
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
*/
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

const removeKnownHost= () => {
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

router.get('/copy-get-started', function(request, response) {
    'use strict';
    console.log('QUERY: DUMMY-COPYGETSTARTED ROUTER');
    allData = '';
    getSshIp()
        .then(result => {
            var message = {
                'result': 'SUCCESS',
                'route': request.route.path,
                'hostName': result.hostName,
                'idFile': result.identityFile };
            console.log('Copy-get-started calledin SCRIPT-PUSHER:\n' + JSON.stringify(message, null, 4));
            //runCpuInfoRemote(result.hostName, result.identityFile, response);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });

    /*
    copyGetStarted()
        .then(result => {
            console.log(JSON.stringify(result, null, 4));
            response.send(result);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });
        */
    response.send({result: 'COPY GET STARTED ROUTER success'});
});

router.get('/remove-known-host', function(request, response) {
    'use strict';
    console.log('QUERY: DUMMY-REMOVEKNOWNHOST ROUTER');
    allData = '';
    getSshIp()
        .then(result => {
            var message = {
                'result': 'SUCCESS',
                'route': request.route.path,
                'hostName': result.hostName,
                'idFile': result.identityFile
            };
            console.log('reboot-instance called in SCRIPT-PUSHER:\n' + JSON.stringify(message, null, 4));
            //runCpuInfoRemote(result.hostName, result.identityFile, response);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });

    /*removeKnownHost()
        .then(result => {
            console.log(JSON.stringify(result, null, 4));
            response.send(result);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });
        */
    response.send({result: 'REMOVE KNOWN HOST ROUTER success'});
});


module.exports = router;

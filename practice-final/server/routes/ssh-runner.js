var express = require('express');
var router = express.Router();
const Client = require('ssh2').Client;
//const LinnePrivateKey = '/.ssh/isit320-AWS-educate.pem';
const elfUtils = require('elven-code').elfUtils;

//const hostAddress = '18.206.62.166';

let allData = '';
//***************************
//UNCOMMENT BY THE NUMBERS
//***************************
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

// ---------------------
// run CPU Info Remote
// ---------------------
const runCpuInfoRemote = (hostName, identityFile, response) => {
    // create new inst. of client and get conn obj back
    var conn = new Client();
    var commandPath =
        '/home/ubuntu/Git/JsObjects/Utilities/SetupLinuxBox/CpuInfo';
    // "when you est conn w/ server, run this code":
    conn.on('ready', function() {
        console.log('Client :: ready');
        conn.exec(commandPath, function(err, stream) {
            // this is starting a stream to send command to server and get
            // data back from it
            if (err) throw err;
            stream
                .on('close', function(code, signal) {
                    console.log(
                        'Stream :: close :: code: ' +
                            code +
                            ', signal: ' +
                            signal
                    );
                    conn.end();
                    response.send({ result: 'success', allData: allData });
                })
                .on('data', function(data) {
                    console.log('STDOUT: ' + data);
                    allData += data;
                })
                .stderr.on('data', function(data) {
                    console.log('STDERR: ' + data);
                    allData += data;
                });
        });
        //this is for when we actually conn to the server
        //this also appears to run before the code above
    }).connect({
        host: hostName,
        port: 22,
        username: 'ubuntu',
        privateKey: require('fs').readFileSync(
            process.env.HOME + '/.ssh/' + identityFile
        )
    });
};

const runUptimeRemote = (hostName, identityFile, response) => {
    // create new inst. of client and get conn obj back
    var conn = new Client();

    // "when you est conn w/ server, run this code":
    conn.on('ready', function() {
        console.log('Client :: ready');
        conn.exec('/usr/bin/uptime', function(err, stream) {
            // this is starting a stream to send command to server and get
            // data back from it
            if (err) throw err;
            stream
                .on('close', function(code, signal) {
                    console.log(
                        'Stream :: close :: code: ' +
                            code +
                            ', signal: ' +
                            signal
                    );
                    conn.end();
                    response.send({ result: 'success', allData: allData });
                })
                .on('data', function(data) {
                    console.log('STDOUT: ' + data);
                    allData += data;
                })
                .stderr.on('data', function(data) {
                    console.log('STDERR: ' + data);
                    allData += data;
                });
        });
        //this is for when we actually conn to the server
        //this also appears to run before the code above
    }).connect({
        host: hostName,
        port: 22,
        username: 'ubuntu',
        privateKey: require('fs').readFileSync(
            process.env.HOME + '/.ssh/' + identityFile
        )
    });
};

router.get('/uptime', function(request, response) {
    allData = '';
    getSshIp()
        .then(result => {
            console.log('run-cpu-info called in ssh-runner', result.hostName);
            runUptimeRemote(result.hostName, result.identityFile, response);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });
});

router.get('/cpu-info', (request, response) => {
    allData = '';
    getSshIp()
        .then(result => {
            console.log('run-cpu-info called in ssh-runner', result.hostName);
            runCpuInfoRemote(result.hostName, result.identityFile, response);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });

    //runCpuInfoRemote(hostAddress, response);
});

module.exports = router;

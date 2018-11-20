var express = require('express');
var router = express.Router();
const Client = require('ssh2').Client;
//const elfUtils = require('elven-code').elfUtils;

const hostAddress = '18.206.62.166';

let allData = '';

/*const getSshIp = () => {
    return new Promise(function(resolve, reject){
        elfUtils
            .readFile(process.end.HOME + '/.ssh/config')
            ...
    })
}

*/
const runCpuInfo = (hostAddress, response) => {
    // create new inst. of client and get conn obj back
    var conn = new Client();

    // "when you est conn w/ server, run this code":
    conn.on('ready', function() {
        console.log('Client :: ready');
        conn.exec('usr/bin/uptime', function(err, stream) {
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
        host: hostAddress,
        port: 22,
        username: 'ubuntu',
        privateKey: require('fs').readFileSync(
            process.env.HOME + '/.ssh/isit320-AWS-educate.pem'
        )
    });
};

router.get('/uptime', (request, response) => {
    console.log('run-get-started called in ssh-runner', hostAddress);
    runCpuInfo(hostAddress, event);


    // this needs 'response' because it has a 'send' method
    // that allows sending data back to the client
    runCpuInfo(hostAddress, response);
});

module.exports = router;
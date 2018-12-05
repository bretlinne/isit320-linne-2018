var express = require('express');
var router = express.Router();
const elfUtils = require('elven-code').elfUtils;

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

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: 'AWS Provision Final Server',
        author: 'Bret Linne'
    });
});

router.get('/foo', function(request, response) {
    var message = { 'result': 'success', 'status': 'bar', 'file': 'index.js' };
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/create-educate', function(request, response) {
    getSshIp()
        .then(result => {
            var message = {'result': 'create-educate SUCCESS', 'hostName': result.hostName, 'idFile': result.identityFile };
            console.log('create-educate called in INDEX:\n' + JSON.stringify(message, null, 4));
            //runCpuInfoRemote(result.hostName, result.identityFile, response);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });
    response.send({result: 'CREATE-EDUCATE ROUTER success'});
});

router.get('/create-standard', function(request, response) {
    getSshIp()
        .then(result => {
            var message = {'result': 'create-standard SUCCESS', 'hostName': result.hostName, 'idFile': result.identityFile };
            console.log('create-standard called in INDEX:\n' + JSON.stringify(message, null, 4));
            //runCpuInfoRemote(result.hostName, result.identityFile, response);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });
    response.send({result: 'CREATE-STANDARD ROUTER success'});
});

router.get('/associate-elastic-ip', function(request, response) {
    getSshIp()
        .then(result => {
            var message = {'result': 'associate-elastic-ip SUCCESS', 'hostName': result.hostName, 'idFile': result.identityFile };
            console.log('associate-elastic-ip called in INDEX:\n' + JSON.stringify(message, null, 4));
            //runCpuInfoRemote(result.hostName, result.identityFile, response);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });
    response.send({result: 'ASSOCIATE ELASTIC IP ROUTER success'});
});

router.get('/reboot-instance', function(request, response) {
    getSshIp()
        .then(result => {
            var message = {'result': 'reboot-instance SUCCESS', 'hostName': result.hostName, 'idFile': result.identityFile };
            console.log('reboot-instance called in INDEX:\n' + JSON.stringify(message, null, 4));
            //runCpuInfoRemote(result.hostName, result.identityFile, response);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });
    response.send({result: 'REBOOT INSTANCE ROUTER success'});
});

router.get('/get-instance-status', function(request, response) {
    getSshIp()
        .then(result => {
            var message = {'result': 'get-instance-status SUCCESS', 'hostName': result.hostName, 'idFile': result.identityFile };
            console.log('get-instance-status called in INDEX:\n' + JSON.stringify(message, null, 4));
            //runCpuInfoRemote(result.hostName, result.identityFile, response);
        })
        .catch(err => {
            console.log(err);
            response.send(err);
        });
    response.send({result: 'GET INSTANCE STATUS ROUTER success'});
});
module.exports = router;

allData = '';


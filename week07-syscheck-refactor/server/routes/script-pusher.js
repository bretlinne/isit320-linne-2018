var express = require('express');
var router = express.Router();

const spawn = require('child_process').spawn;

let allData = "";

const runSystemTool = script =>{
    return new Promise(function(resolve, reject){
        console.log('System TOOL ENVIRONMENT', process.env.bash);
    })
}
const scriptRunner = (script) => {

    return new Promise(function (resolve, reject) {
        allData = '';
          //console.log("Run CpuInfo on LocalSystem", process.env.SETUP_LINUXBOX);
        //console.log("Run a specified script on LocalSystem",
        //    process.env.SETUP_LINUXBOX);

        //const pushScript = spawn(process.env.SETUP_LINUXBOX + '/CpuInfo');
        const pushScript = spawn(process.env.SETUP_LINUXBOX + '/' + script);

        pushScript.stdout.on('data', (data) => {
            console.log(`child stdout:\n${data}`);
            allData += 'PUSH-SCRIPT: ' + data;
            //console.log('PUSH', data);
        });

        pushScript.stderr.on('data', (data) => {
            console.log(`child stderr:\n${data}`);
            allData += 'PUSH-SCRIPT: ' + data;
            //console.error('PUSH', data);
        });

        pushScript.on('close', (code) => {
            resolve({
                result: 'success',
                allData: allData,
                code: code
            });
        });

        pushScript.on('error', (code) => {
            reject({
                result: 'error',
                code: code
            });
        });
    });
};

/*
router.get('/run-system-tool', (request, response) => {
    'use strict';
    allData='';
    console.log('QUERY IN RUN SYSTEM TOOL', request.query);
    runSystemTool(request.query.script)
        .then((result)=>{

    };

});
*/

router.get('/run-script', function(request, response) {
    'use strict';
    console.log('QUERY', request.query.script);
    // this line below is just a sanity check for debugging
    //response.send({results: request.query.script})
    scriptRunner(request.query.script)
        .then((result) => {
            console.log(JSON.stringify(result, null, 4));
            response.send(result);
        })
        .catch((err) => {
            console.log(err);
            response.send(err);
        });
});
module.exports = router;

const request = require('supertest');
const app = require('../app'); //reference to you app.js file
const assert = require('assert');

let exitCode = 0;

describe('Test script-pusher.js', function() {

    //it.only('should call version Check route', function(done) {
    it('should call version Check route', function(done) {
        this.timeout(4000);
        request(app)
            .get('/script-pusher/run-script?script=VersionCheck')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            //.expect(200, done(), done);
            .expect(200, done);
    });

    it('should call script-pusher/foo route', function(done) {
        request(app)
            .get('/script-pusher/foo')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check script-pusher/foo route', function(done) {
        request(app)
            .get('/script-pusher/foo')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({
                file: 'script-pusher.js',
                result: 'success',
                status: 'script-pusher works'
            });
    });

    // VERSION CHECK TEST
    it('should check script-pusher/run-script Version Check', function(done) {
        this.timeout(5000);
        request(app)
            .get('/script-pusher/run-script?script=VersionCheck')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((result) => {

                assert.equal(result.body.result, 'success');
                assert.equal(result.body.code, exitCode);
                const present = result.body.allData.includes('PUSH-SCRIPT');
                assert.ok(present);
                done();

            });
    });

    // CPU INFO CHECK
    it('should check script-pusher/run-script Cpu Info', function(done) {
        this.timeout(4000);
        request(app)
            .get('/script-pusher/run-script?script=CpuInfo')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((result) => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.code, exitCode);
                const present = result.body.allData.includes('model name');
                assert.ok(present);
                done();
            });
    });

    // UPTIME CHECK
    it('should check script-pusher/run-system-tool Uptime', function(done) {
        this.timeout(4000);
        request(app)
            .get('/script-pusher/run-system-tool?script=Uptime')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((result) => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.code, exitCode);
                const present = result.body.allData.includes('UPTIME:');
                assert.ok(present);
                done();
            })
            .catch(err => {
                console.log(err);
                response.send(err);
            });
    });
});


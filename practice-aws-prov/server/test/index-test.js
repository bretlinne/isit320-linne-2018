const request = require('supertest');
const assert = require('assert');
const app = require('../app'); //reference to you app.js file

let longTimeout = 3000;
let exitCode = 0;
//let versionCheckCode =1;

describe('Test index.js', function() {
    it('should call foo route', function(done) {
        request(app)
            .get('/foo')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check foo route and check JSON', function(done) {
        request(app)
            .get('/foo')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ file: 'index.js', result: 'success', status: 'bar' })
            .expect(200, done);
    });

    it('should call create-educate route', function(done) {
        this.timeout(longTimeout);
        request(app)
            .get('/create-educate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should call create-standard route', function(done) {
        this.timeout(longTimeout);
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should call associate-elastic-ip route', function(done) {
        this.timeout(longTimeout);
        request(app)
            .get('/associate-elastic-ip')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should call reboot-instance route', function(done) {
        this.timeout(longTimeout);
        request(app)
            .get('/reboot-instance')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should call get-instance-status route', function(done) {
        this.timeout(longTimeout);
        request(app)
            .get('/get-instance-status')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    //===============================
    // MORE COMPLEX TESTS
    //===============================
    it('COMPLEX TEST: check /create-educate', function(done) {
        this.timeout(longTimeout);
        request(app)
            .get('/create-educate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.exitCode, exitCode);
                const present = result.body.route.includes(
                    '/create-educate'
                );
                assert.ok(present);
                done();
            });
    });

    it('COMPLEX TEST: check /create-standard', function(done) {
        this.timeout(longTimeout);
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.exitCode, exitCode);
                const present = result.body.route.includes(
                    '/create-standard'
                );
                assert.ok(present);
                done();
            });
    });

    it('COMPLEX TEST: check /associate-elastic-ip', function(done) {
        this.timeout(longTimeout);
        request(app)
            .get('/associate-elastic-ip')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.exitCode, exitCode);
                const present = result.body.route.includes(
                    '/associate-elastic-ip'
                );
                assert.ok(present);
                done();
            });
    });

    it('COMPLEX TEST: check /reboot-instance', function(done) {
        this.timeout(longTimeout);
        request(app)
            .get('/reboot-instance')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.exitCode, exitCode);
                const present = result.body.route.includes(
                    '/reboot-instance'
                );
                assert.ok(present);
                done();
            });
    });

    it('COMPLEX TEST: check /get-instance-status', function(done) {
        this.timeout(longTimeout);
        request(app)
            .get('/get-instance-status')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.exitCode, exitCode);
                const present = result.body.route.includes(
                    '/get-instance-status'
                );
                assert.ok(present);
                done();
            });
    });

    //get-instance-status EXPECTS SPECIFIC RESULTS
    it('COMPLEX TEST: /get-instance-status has specific results', function(done) {
        this.timeout(longTimeout);
        let pInstanceId= 'i-07109de9a6bb1ec7a';
        request(app)
            .get(`/get-instance-status?instanceId=${pInstanceId}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.hostName, '18.206.62.166');
                assert.equal(result.body.idFile, 'isit320-AWS-educate.pem');
                assert.equal(result.body.exitCode, exitCode);
                assert.equal(result.body.instanceStatus, 'Running');
                assert.equal(result.body.instanceId, 'i-07109de9a6bb1ec7a');
                const present = result.body.route.includes(
                    '/get-instance-status'
                );
                assert.ok(present);
                done();
            });
    });

    //associate-ELASTIC-IP EXPECTS SPECIFIC RESULTS
    it('COMPLEX TEST: /associate-elastic-ip has specific results', function(done) {
        this.timeout(longTimeout);
        let pInstanceId= 'i-07109de9a6bb1ec7a';
        let pAllocationId = 'standard';
        let pRegion = 'west';
        request(app)
            .get(`/associate-elastic-ip?instanceId=${pInstanceId}&allocationId=${pAllocationId}&region=${pRegion}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.hostName, '18.206.62.166');
                assert.equal(result.body.idFile, 'isit320-AWS-educate.pem');
                assert.equal(result.body.exitCode, exitCode);
                assert.equal(result.body.region, 'west');
                assert.equal(result.body.allocationId, 'standard');
                assert.equal(result.body.instanceId, 'i-07109de9a6bb1ec7a');
                const present = result.body.route.includes(
                    '/associate-elastic-ip'
                );
                assert.ok(present);
                done();
            });
    });
});

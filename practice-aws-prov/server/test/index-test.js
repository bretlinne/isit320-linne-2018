const request = require('supertest');
const assert = require('assert');
const app = require('../app'); //reference to you app.js file

let exitCode = 0;

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
        this.timeout(4000);
        request(app)
            .get('/create-educate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should call create-standard route', function(done) {
        this.timeout(4000);
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should call associate-elastic-ip route', function(done) {
        this.timeout(4000);
        request(app)
            .get('/associate-elastic-ip')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should call reboot-instance route', function(done) {
        this.timeout(4000);
        request(app)
            .get('/reboot-instance')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should call get-instance-status route', function(done) {
        this.timeout(4000);
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
        this.timeout(5000);
        request(app)
            .get('/create-educate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.code, exitCode);
                const present = result.body.allData.includes(
                    '"route": "/create-educate"'
                );
                assert.ok(present);
                done();
            });
    });

    it('COMPLEX TEST: check /create-standard', function(done) {
        this.timeout(5000);
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.code, exitCode);
                const present = result.body.allData.includes(
                    '"route": "/create-standard"'
                );
                assert.ok(present);
                done();
            });
    });

    it('COMPLEX TEST: check /associate-elastic-ip', function(done) {
        this.timeout(5000);
        request(app)
            .get('/associate-elastic-ip')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.code, exitCode);
                const present = result.body.allData.includes(
                    '"route": "/associate-elastic-ip"'
                );
                assert.ok(present);
                done();
            });
    });

    it('COMPLEX TEST: check /reboot-instance', function(done) {
        this.timeout(5000);
        request(app)
            .get('/reboot-instance')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.code, exitCode);
                const present = result.body.allData.includes(
                    '"route": "/reboot-instance"'
                );
                assert.ok(present);
                done();
            });
    });

    it('COMPLEX TEST: check /get-instance-status', function(done) {
        this.timeout(5000);
        request(app)
            .get('/get-instance-status')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.code, exitCode);
                const present = result.body.allData.includes(
                    '"route": "/get-instance-status"'
                );
                assert.ok(present);
                done();
            });
    });
});

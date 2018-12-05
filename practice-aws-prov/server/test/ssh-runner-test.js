const request = require('supertest');
const app = require('../app'); //reference to you app.js file
const assert = require('assert');

let exitCode = 0;

describe('Test script-pusher.js', function() {
    it('should call run-lubuntu-setup route', function(done) {
        this.timeout(4000);
        request(app)
            .get('/ssh-runner/run-lubuntu-setup')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should call run-get-started route', function(done) {
        this.timeout(4000);
        request(app)
            .get('/ssh-runner/run-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    // more complex run-lubuntu-setup test
    it('COMPLEX TEST: check /script-pusher/run-lubuntu-setup', function(done) {
        this.timeout(5000);
        request(app)
            .get('/script-pusher/run-lubuntu-setup')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.code, exitCode);
                const present = result.body.allData.includes(
                    '"route": "/copy-get-started"'
                );
                assert.ok(present);
                done();
            });
    });

    // MORE COMPLEX remove-known-host TEST
    it('COMPLEX TEST: check /script-pusher/run-get-started', function(done) {
        this.timeout(4000);
        request(app)
            .get('/script-pusher/run-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.code, exitCode);
                const present = result.body.allData.includes('model name');
                assert.ok(present);
                done();
            });
    });
});

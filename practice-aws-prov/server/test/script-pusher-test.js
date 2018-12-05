const request = require('supertest');
const app = require('../app'); //reference to you app.js file
const assert = require('assert');

let exitCode = 0;

describe('Test script-pusher.js', function() {
    //it.only('should call version Check route', function(done) {
    it('should call copy-get-started route', function(done) {
        this.timeout(4000);
        request(app)
            .get('/script-pusher/copy-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should call remove-known-host route', function(done) {
        this.timeout(4000);
        request(app)
            .get('/script-pusher/remove-known-host')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    // more complex copy-get-started test
    it('COMPLEX TEST: check /script-pusher/copy-get-started', function(done) {
        this.timeout(5000);
        request(app)
            .get('/script-pusher/copy-get-started')
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
    it('COMPLEX TEST: check /script-pusher/remove-known-host', function(done) {
        this.timeout(4000);
        request(app)
            .get('/script-pusher/remove-known-host')
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

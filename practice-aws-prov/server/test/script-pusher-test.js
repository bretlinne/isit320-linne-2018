const request = require('supertest');
const app = require('../app'); //reference to you app.js file
const assert = require('assert');

let longTimeout = 3000;
let exitCode = 0;

describe('Test script-pusher.js', function() {
    //it.only('should call version Check route', function(done) {
    it('should call copy-get-started route', function(done) {
        this.timeout(longTimeout);
        request(app)
            .get('/script-pusher/copy-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should call remove-known-host route', function(done) {
        this.timeout(longTimeout);
        request(app)
            .get('/script-pusher/remove-known-host')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    // more complex copy-get-started test
    it('COMPLEX TEST: check /script-pusher/copy-get-started', function(done) {
        this.timeout(longTimeout);
        request(app)
            .get('/script-pusher/copy-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.exitCode, exitCode);
                const present = result.body.route.includes('/copy-get-started');
                assert.ok(present);
                done();
            });
    });

    // MORE COMPLEX remove-known-host TEST
    it('COMPLEX TEST: check /script-pusher/remove-known-host', function(done) {
        this.timeout(longTimeout);
        request(app)
            .get('/script-pusher/remove-known-host')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.result, 'success');
                assert.equal(result.body.exitCode, exitCode);
                const present = result.body.route.includes(
                    '/remove-known-host'
                );
                assert.ok(present);
                done();
            });
    });

    //REMOVE-KNOWN-HOST EXPECTS SPECIFIC RESULTS
    it('COMPLEX TEST: /script-pusher/remove-known-host has specific results', function(done) {
        this.timeout(longTimeout);
        let pEc2Ip = '255.255.255.255';
        request(app)
            .get(`/script-pusher/remove-known-host?ec2Ip=${pEc2Ip}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(result => {
                assert.equal(result.body.hostName, '18.206.62.166');
                assert.equal(result.body.idFile, 'isit320-AWS-educate.pem');
                assert.equal(result.body.exitCode, exitCode);
                assert.equal(result.body.ec2Ip, '255.255.255.255');
                const present = result.body.route.includes(
                    '/remove-known-host'
                );
                assert.ok(present);
                done();
            });
    });
});

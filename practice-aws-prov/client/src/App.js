import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import LinneHeader from './LinneHeader';

class App extends Component {
    constructor() {
        super();
        this.state = {
            status: 'waiting for server',
            responseTop: 'unknown'
        };
    }

    //---------------------
    // FOO
    //---------------------
    queryServer = () => {
        const that = this;
        fetch('/foo')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('runFoo called: ', json.result);
                that.setState({ status: 'Foo Route Called ' + json.result });
                return json;
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    //---------------------
    // create-educate
    //---------------------
    createEducate = () => {
        const that = this;

        fetch('/create-educate')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('createEducate Function called: ', json.result);
                that.setState({ responseTop: json.result });
                return json;
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    //---------------------
    // /create-standard
    //---------------------
    createWithAwsStandardAccount = () => {
        const that = this;
        fetch('/create-standard')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(
                    'createWithAwsStandardAccount Function called: ',
                    json.result
                );
                that.setState({ responseTop: json.result });
                return json;
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };
    //---------------------
    // associate-elastic-ip
    //---------------------
    associateElasticIp = () => {
        const that = this;
        fetch(
            '/associate-elastic-ip?instanceId=xxx&allocationId=yyy&region=zzz'
        )
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(
                    'associateElasticIp Function called: ',
                    json.result,
                    JSON.stringify(json.query)
                );
                that.setState({ responseTop: json.result });
                return json;
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    //---------------------
    // copy-get-started
    //---------------------
    copyGetStarted = () => {
        const that = this;
        fetch('/script-pusher/copy-get-started')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('copyGetStarted Function called: ', json.result);
                that.setState({ responseTop: json.result });
                return json;
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    //---------------------
    // run-get-started
    //---------------------
    runGetStarted = () => {
        const that = this;
        fetch('/ssh-runner/run-get-started')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('runGetStarted Function called: ', json.result);
                that.setState({ responseTop: json.result });
                return json;
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    //---------------------
    // runLubuntuSetup
    //---------------------
    runLubuntuSetup = () => {
        const that = this;
        fetch('/ssh-runner/run-lubuntu-setup')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('removeKnownHost Function called: ', json.result);
                that.setState({ responseTop: json.result });
                return json;
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    //---------------------
    // remove-known-host
    //---------------------
    removeKnownHost = () => {
        const that = this;
        fetch('/script-pusher/remove-known-host?ec2Ip=xxx.xxx.xxx.xxx')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(
                    'removeKnownHost Function called: ',
                    json.result,
                    JSON.stringify(json.query)
                );
                that.setState({ responseTop: json.result });
                return json;
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    //---------------------
    // get-instance-status
    //---------------------
    getInstanceStatus = () => {
        const that = this;
        fetch('/get-instance-status?instanceId=xxx')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(
                    'getInstanceStatus Function called: ',
                    json.result,
                    JSON.stringify(json.query)
                );
                that.setState({ responseTop: json.result });
                return json;
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    //---------------------
    // rebootInstance
    //---------------------
    rebootInstance = () => {
        const that = this;
        fetch('/reboot-instance')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('rebootInstance Function called: ', json.result);
                that.setState({ responseTop: json.result });
                return json;
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        return (
            <div className="App">
                <LinneHeader />
                <main>
                    <section>
                        <button onClick={this.queryServer}>Bar</button>
                        <pre>state: {this.state.status}</pre>
                    </section>

                    <hr />
                    <section>
                        <button onClick={this.createEducate}>
                            Create with AWS Educate Account
                        </button>
                        <button onClick={this.createWithAwsStandardAccount}>
                            Create with AWS Standard Account
                        </button>
                        <button onClick={this.associateElasticIp}>
                            Associate Elastic Ip
                        </button>
                    </section>

                    <hr />
                    <section>
                        <pre>state: {this.state.responseTop}</pre>
                    </section>

                    <hr />
                    <section>
                        <button onClick={this.copyGetStarted}>
                            Copy the GetStarted Script
                        </button>
                        <button onClick={this.runGetStarted}>
                            Run the GetStarted Script
                        </button>
                        <button onClick={this.runLubuntuSetup}>
                            Run the LubuntuSetup Script
                        </button>
                    </section>

                    <hr />
                    <section>
                        <button onClick={this.removeKnownHost}>
                            Remove from KnownHost
                        </button>
                        <button onClick={this.getInstanceStatus}>
                            Get Instance Status
                        </button>
                        <button onClick={this.rebootInstance}>
                            Reboot Instance
                        </button>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;

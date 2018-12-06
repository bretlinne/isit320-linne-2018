import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import LinneHeader from './LinneHeader';

class App extends Component {
    constructor() {
        super();
        this.state = {
            status: 'waiting for server',
            responseTop: 'unknown',
            Route: '',
            HostAddress: '',
            AllocationId: '',
            InstanceId: '',
            KeyName: '',
            Architecture: '',
            OS: '',
            GenericTrueFalseFlag: '',
            RemovedEc2Ip: '',
            InstanceStatus: '',
            Region: ''
        };
    }

    clearDataFields = () => {
        const that = this;
        that.setState({
            status: 'waiting for server',
            Route: '',
            HostAddress: '',
            AllocationId: '',
            InstanceId: '',
            KeyName: '',
            Architecture: '',
            OS: '',
            GenericTrueFalseFlag: '',
            RemovedEc2Ip: '',
            InstanceStatus: '',
            Region: ''
        });
    };
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
        this.clearDataFields();
        fetch('/create-educate')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('createEducate Function called: ', json.result);
                that.setState({
                    responseTop: json.result,
                    Route: 'Route: ' + json.route,
                    HostAddress: 'HostAddress: ' + json.hostName,
                    AllocationId:
                        'AllocationId: ' + json.instanceData.AllocationId,
                    InstanceId: 'InstanceId: ' + json.instanceData.InstanceId,
                    KeyName: 'KeyName: ' + json.instanceData.KeyName,
                    Architecture:
                        'Architecture: ' + json.instanceData.Architecture,
                    OS: 'OS: ' + json.instanceData.OS
                });
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
        this.clearDataFields();
        fetch('/create-standard')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(
                    'createWithAwsStandardAccount Function called: ',
                    json.result
                );
                that.setState({
                    responseTop: json.result,
                    Route: 'Route: ' + json.route,
                    HostAddress: 'HostAddress: ' + json.hostName,
                    AllocationId:
                        'AllocationId: ' + json.instanceData.AllocationId,
                    InstanceId: 'InstanceId: ' + json.instanceData.InstanceId,
                    KeyName: 'KeyName: ' + json.instanceData.KeyName,
                    Architecture:
                        'Architecture: ' + json.instanceData.Architecture,
                    OS: 'OS: ' + json.instanceData.OS
                });
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
        this.clearDataFields();
        let pInstanceId = 'i-07109de9a6bb1ec7a';
        let pAllocationId = 'standard';
        let pRegion = 'west';
        fetch(
            `/associate-elastic-ip?instanceId=${pInstanceId}&allocationId=${pAllocationId}&region=${pRegion}`
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
                that.setState({
                    responseTop: json.result,
                    Route: 'Route: ' + json.route,
                    HostAddress: 'HostName: ' + json.hostName,
                    KeyName: 'KeyName: ' + json.idFile,
                    AllocationId: 'AllocationId: ' + json.allocationId,
                    InstanceId: 'InstanceId: ' + json.instanceId,
                    Region: 'Region: ' + json.region
                });
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
        this.clearDataFields();
        fetch('/script-pusher/copy-get-started')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('copyGetStarted Function called: ', json.result);
                that.setState({
                    responseTop: json.result,
                    Route: 'Route: ' + json.route,
                    GenericTrueFalseFlag:
                        'GetStarted Copied Over: ' + json.scriptCopied
                });
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
        this.clearDataFields();
        fetch('/ssh-runner/run-get-started')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('runGetStarted Function called: ', json.result);
                that.setState({
                    responseTop: json.result,
                    Route: 'Route: ' + json.route,
                    GenericTrueFalseFlag:
                        'GetStarted Executed: ' + json.scriptRunning
                });
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
        this.clearDataFields();
        fetch('/ssh-runner/run-lubuntu-setup')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('removeKnownHost Function called: ', json.result);
                that.setState({
                    responseTop: json.result,
                    Route: 'Route: ' + json.route,
                    GenericTrueFalseFlag:
                        'LubuntuSetup Executed: ' + json.scriptRunning
                });
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
        this.clearDataFields();
        let pEc2Ip = '255.255.255.255';
        fetch(`/script-pusher/remove-known-host?ec2Ip=${pEc2Ip}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(
                    'removeKnownHost Function called: ',
                    json.result,
                    JSON.stringify(json.query)
                );
                that.setState({
                    responseTop: json.result,
                    Route: 'Route: ' + json.route,
                    RemovedEc2Ip: 'Removed Ec2Ip: ' + json.ec2Ip
                });
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
        this.clearDataFields();
        let pInstanceId = 'i-07109de9a6bb1ec7a';
        fetch(`/get-instance-status?instanceId=${pInstanceId}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(
                    'getInstanceStatus Function called: ',
                    json.result,
                    JSON.stringify(json.query)
                );
                that.setState({
                    responseTop: json.result,
                    Route: 'Route: ' + json.route,
                    InstanceStatus: 'Instance Status: ' + json.instanceStatus,
                    InstanceId: 'Instance ID: ' + json.instanceId
                });
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
        this.clearDataFields();
        fetch('/reboot-instance')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('rebootInstance Function called: ', json.result);
                that.setState({
                    responseTop: json.result,
                    Route: 'Route: ' + json.route,
                    GenericTrueFalseFlag: 'Rebooting: ' + json.reboot
                });
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
                        <pre>{this.state.Route}</pre>
                        <pre>{this.state.HostAddress}</pre>
                        <pre>{this.state.AllocationId}</pre>
                        <pre>{this.state.InstanceId}</pre>
                        <pre>{this.state.KeyName}</pre>
                        <pre>{this.state.Architecture}</pre>
                        <pre>{this.state.OS}</pre>
                        <pre>{this.state.GenericTrueFalseFlag}</pre>
                        <pre>{this.state.RemovedEc2Ip}</pre>
                        <pre>{this.state.InstanceStatus}</pre>
                        <pre>{this.state.Region}</pre>
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

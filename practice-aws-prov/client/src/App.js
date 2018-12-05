import React, {Component} from 'react';
import './App.css';
import 'whatwg-fetch';
import LinneHeader from "./LinneHeader";

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'File name will be placed here.',
            status: 'waiting for server',
            responseTop: 'unknown',
            responseBottom: 'unknown'
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
                console.log('parsed json', json);
                that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
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
                console.log('parsing failed, URL bad, network down, or similar', ex);
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
                console.log('createWithAwsStandardAccount Function called: ', json.result);
                that.setState({ responseTop: json.result });
                return json;
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };
    //---------------------
    // associate-elastic-ip
    //---------------------
    associateElasticIp = () => {
        const that = this;
        fetch('/associate-elastic-ip')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('associateElasticIp Function called: ', json.result);
                that.setState({ responseTop: json.result });
                return json;
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
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
                that.setState({ responseBottom: json.result });
                return json;
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
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
                that.setState({ responseBottom : json.result });
                return json;
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };
    //---------------------
    // remove-known-host
    //---------------------
    removeKnownHost = () => {
        const that = this;
        fetch('/script-pusher/remove-known-host')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('removeKnownHost Function called: ', json.result);
                that.setState({ responseBottom : json.result });
                return json;
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };
    render() {
        return (
            <div className="App">
                <LinneHeader/>
                <main>
                    <section>
                        <button onClick={this.queryServer}>Bar</button>
                        <p>
                            state: {this.state.status} file: {this.state.file}
                        </p>
                    </section>
                    <section>
                        <button onClick={this.createEducate	}>Create with AWS Educate Account</button>
                        <button onClick={this.createWithAwsStandardAccount}>Create with AWS Standard Account</button>
                        <button onClick={this.associateElasticIp}>Associate Elastic Ip</button>
                        <pre>state: {this.state.responseTop}</pre>
                    </section>
                    <section>
                        <button onClick={this.copyGetStarted}>Copy the GetStarted Script</button>
                        <button onClick={this.runGetStarted}>Run the GetStarted Script</button>
                        <button onClick={this.removeKnownHost}>Remove from KnownHost</button>
                        <pre>state: {this.state.responseBottom}</pre>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
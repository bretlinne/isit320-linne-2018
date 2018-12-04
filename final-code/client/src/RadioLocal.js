import React, { Component } from 'react';
import './App.css';

// RadioLocal
// --this is a script that designates that CpuInfo and SystemCheck
// --will be invoked on the local system, not a remote one
class RadioLocal extends Component {
    constructor(props) {
        super(props);
        this.dataEndPoints = [
            '/index/run-foo',   //0
            '/index/run-bar',   //1
            '/index/run-qux',   //2
            '/index/run-farq',  //3
            '/index/run-snafu', //4
            '/script-pusher/run-script?script=', // dataEndpoint #5
            '/script-pusher/run-system-tool?script=' // dataEndpoint #6
        ];
        this.state = {
            allData: '',
            selectedValue: '',
            endPointIndex: 0,
            foo: 'unknown',
            bar: 'unknown',
            qux: 'unknown',
            farq: 'unknown',
            snafu: 'unknown'
        };
    }

    runFoo = () => {
        const that = this;
        fetch('/run-foo')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('runFoo Function: ', json.result);
                that.setState({ foo: json.result });
                return json;
            });
    };

    runBar = () => {
        const that = this;
        fetch('/run-bar')
            .then(function(response) {
                console.log('bar result: ', response);
                return response.json();
            })
            .then(function(json) {
                console.log('runFoo Function: ', json.result);
                that.setState({ bar: json.result });
                return json;
            });
    };

    runQux = () => {
        const that = this;
        fetch('/run-qux')
            .then(function(response) {
                console.log('qux result: ', response);
                return response.json();
            })
            .then(function(json) {
                console.log('runQux Function: ', json.result);
                that.setState({ qux: json.result });
                return json;
            });
    };

    runFarq = () => {
        const that = this;
        fetch('/run-farq')
            .then(function(response) {
                console.log('farq result: ', response);
                return response.json();
            })
            .then(function(json) {
                console.log('runFarq Function: ', json.result);
                that.setState({ farq: json.result });
                return json;
            });
    };


    runSnafu = () => {
        const that = this;
        fetch('/run-snafu')
            .then(function(response) {
                console.log('snafu result: ', response);
                return response.json();
            })
            .then(function(json) {
                console.log('runSnafu Function: ', json.result);
                that.setState({ snafu: json.result });
                return json;
            });
    };

    runScript = (path, script) => {
        const that = this;
        if (!script) {
            return;
        }
        fetch(path + script)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('allData', json.allData);
                console.log('result', json.result);
                console.log('code', json.code);
                console.log('error', json.error);
                let info = '';
                if (json.result === 'error') {
                    info = json.error;
                } else if (script === 'CpuInfo') {
                    var regex1 = RegExp('model name.*', 'g');
                    let array1 = regex1.exec(json.allData);
                    while (array1 !== null) {
                        info += array1[0] + '\n';
                        console.log(`Found ${array1[0]}.`);
                        array1 = regex1.exec(json.allData);
                    }
                } else {
                    info = json.allData;
                }
                that.setState({ allData: info });
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    handleChange = event => {
        const selectedValue = event.target.value;
        const endPointIndex = event.target.getAttribute('data-endpoint');
        console.log('HANDLE CHANGE', selectedValue);
        this.setState({
            ...this.state,
            selectedValue: selectedValue,
            endPointIndex: endPointIndex
        });
    };

    handleSubmit = event => {
        this.setState({ allData: '' });
        console.log('A name was submitted: ', this.state);
        console.log('path: ', this.dataEndPoints[this.state.endPointIndex]);
        console.log('script: ', this.state.selectedValue);
        switch(this.state.selectedValue){
            case 'Foo':
                this.runFoo();
                break;
            case 'Bar':
                this.runBar();
                break;
            case 'Qux':
                this.runQux();
                break;
            case 'Farq':
                this.runFarq();
                break;
            case 'Snafu':
                this.runSnafu();
                break;
            default:
                this.runScript(
                    this.dataEndPoints[this.state.endPointIndex],
                    this.state.selectedValue
                );
                break;
        }
        /*
      // UNCOMMENT AFTER STUBBING ALL FUNCTIONS, ELMINATE SWITCH CASE ABOVE
      this.runScript(
          this.dataEndPoints[this.state.endPointIndex],
          this.state.selectedValue
      );
      */

        event.preventDefault();
    };

    render() {
        const radioLocal = (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="elf-form-field">
                            <legend>Local Services</legend>
                            <input
                                type="radio"
                                name="app-choice"
                                data-endpoint="0"
                                value="Foo"
                                id="elf-radio-foo"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="elf-radio-foo">Run Foo</label>

                            <input
                                type="radio"
                                name="app-choice"
                                data-endpoint="1"
                                value="Bar"
                                id="elf-radio-bar"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="elf-radio-bar">
                                Run Bar
                            </label>

                            <input
                                type="radio"
                                name="app-choice"
                                data-endpoint="2"
                                value="Qux"
                                id="elf-radio-qux"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="elf-radio-qux">Run Qux</label>

                            <input
                                type="radio"
                                name="app-choice"
                                data-endpoint="3"
                                value="Farq"
                                id="elf-radio-farq"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="elf-radio-farq">Run Farq</label>

                            <input
                                type="radio"
                                name="app-choice"
                                data-endpoint="4"
                                value="Snafu"
                                id="elf-radio-snafu"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="elf-radio-snafu">Run Snafu</label>

                            <input
                                type="radio"
                                name="app-choice"
                                data-endpoint="6"
                                value="Uptime"
                                id="elf-radio-uptime"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="elf-radio-cpu">Uptime</label>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Run System Script
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );

        return (
            <div className="App">
                <main>
                    <section>
                        {radioLocal}
                        <pre>{this.state.foo}</pre>
                        <pre>{this.state.bar}</pre>
                        <pre>{this.state.qux}</pre>
                        <pre>{this.state.farq}</pre>
                        <pre>{this.state.snafu}</pre>
                    </section>
                    <section>
                        <pre>{this.state.allData}</pre>
                    </section>
                </main>
            </div>
        );
    }
}

export default RadioLocal;

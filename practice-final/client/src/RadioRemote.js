import React, { Component } from 'react';
import './App.css';

// RadioRemote
// --this is a script that designates that CpuInfo and SystemCheck
// --will be invoked on the local system, not a remote one
class RadioRemote extends Component {
    constructor(props) {
        super(props);
        this.dataEndPoints = [
            '/ssh-runner/' // 0
        ];
        this.state = {
            allData: '',
            selectedValue: '',
            endPointIndex: 0
        };
    }

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
        this.runScript(
            this.dataEndPoints[this.state.endPointIndex],
            this.state.selectedValue
        );
        event.preventDefault();
    };

    render() {
        const radioRemote = (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="elf-form-field">
                            <legend>Remote Services</legend>
                            <input
                                type="radio"
                                name="app-choice"
                                data-endpoint="0"
                                value="uptime"
                                id="elf-uptime-remote"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="elf-uptime-remote">Uptime</label>

                            <input
                                type="radio"
                                name="app-choice"
                                data-endpoint="0"
                                value="cpu-info"
                                id="elf-radio-cpu"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="elf-radio-cpu">CpuInfo</label>
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
                    <section>{radioRemote}</section>
                    <section>
                        <pre>{this.state.allData}</pre>
                    </section>
                </main>
            </div>
        );
    }
}

export default RadioRemote;

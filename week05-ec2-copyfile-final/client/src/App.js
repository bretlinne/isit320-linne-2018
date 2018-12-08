import React, { Component } from 'react';
import './App.css';
import LinneHeader from './LinneHeader';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 'unknown'
        };
    }
    copyScript = () => {
        const that = this;

        fetch('/script-pusher/copy-script')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState({
                    result: json.result
                });
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
                    <button onClick={this.copyScript}>Run Copy Script</button>
                    <pre>Result: {this.state.result}</pre>
                </main>
                <footer>
                    <p>&copy; by Bret Linne</p>
                </footer>
            </div>
        );
    }
}

export default App;

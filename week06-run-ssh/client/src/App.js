import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    runCpuInfo = () => {
        fetch('/')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('JSON from server:', json);
                
            })
            .catch(function (ex) {
                console.log('parsing failed, error on server, URL bad, network down, or similar');
                console.log(JSON.stringify(ex, null, 4));
            });
    };
    render() {
        return (
            <div className="App">
                <header>
                    <h1>Run SSH</h1>
                    <p className="byline">by Bret Linne</p>
                </header>
                <main>
                    <button onClick={this.runCpuInfo}>Run Cpu Info</button>
                </main>
                <footer>
                    <p>&copy; 2018 Bret Linne</p>
                </footer>
            </div>
        );
    }
}

export default App;

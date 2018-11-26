import React, { Component } from 'react';
import './App.css';
import RadioLocal from './RadioLocal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: 'unknown'
        };
    }

    systemCheck = () => {
        const that = this;
        fetch('/script-pusher/system-check')
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                that.setState({ allData: response.allData });
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down; ALL WILL DIE',
                    ex
                );
            });
    };

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Practice System Check Refactor</h1>
                </header>
                <main>
                    <RadioLocal/>
                </main>
                <footer>
                    <p>&copy; by Bret Linne</p>
                </footer>
            </div>
        );
    }
}

export default App;

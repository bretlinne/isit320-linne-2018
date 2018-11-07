import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            allData: "unknown",

        };
    }


    copyScript = () => {
        const that = this;
        fetch('/script-pusher/copy-script')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {

                that.setState({allData: json.allData});
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Copy File</h1>
                </header>
                <main>
                    <button onClick={this.copyScript}>Copy Script</button>
                    <pre>{this.state.allData}</pre>
                </main>
                <footer>
                    <p>&copy; by Bret Linne</p>
                </footer>
            </div>
        );
    }
}

export default App;

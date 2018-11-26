import React, { Component } from 'react';
import './App.css';
import ElfHeader from './ElfHeader';
import RadioLocal from './RadioLocal';
import RadioRemote from './RadioRemote';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: ''
        };
    }

    runFoo = () => {
        const that = this;
        fetch('/foo')
            /* first attempt at getting the "result: 'success'" key-value pair
            to print out to the console from the foo route in index.js (server-side)
            It doesn't work.

            .then(function(response){
                console.log('runFoo: ', response);
                return response;
            });
            */
            // 1st, we return the .json data of the response
            .then(function(response) {
                return response.json();
            })
            // 2nd we run a function on that json data, treating it as its own
            // object.  'result' is a property of this json object
            .then(function(json) {
                console.log('runFoo: ', json.result);
                that.setState({ foo: json.result });
                return json;
            });
    };

    render() {
        //radio local now has the RadioWeb method that used to be here
        return (
            <div className="App">
                <ElfHeader />
                <main>
                    <RadioLocal />
                    <RadioRemote />
                    <button onClick={this.runFoo}>Run Foo</button>
                    <section>{this.state.foo}</section>
                </main>
            </div>
        );
    }
}

export default App;

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
        // 'fetch()' connects to the server side and looks for the 'script-pusher' route
        // within the script-pusher.js file there's a func called 'copy-script'
        fetch('/script-pusher/copy-script')
            /**************************************************************************/
            // ORIGINAL SCRIPT
            // this '.then(func(resp...)) receives data from the fetch above. It returns it to
            //
            .then(function(response) {
                return response.json();
            })
            // both this '.then(func(json)...) and the above one are necc for the prog to work.
            /* This function swaps the name 'response' for 'json'. I don't know why.  They both
            work, as evident below with the duplicate of this function which uses 'response'
            .then(function(json) {
                that.setState({allData: json.allData});
            })
            */
            .then(function(response) {
                that.setState({allData: response.allData});
            })
            /**************************************************************************/
            /**************************************************************************
            // COMPARE: If we rename all instances of 'response' with 'foo', the code still
             works just fine.  Try commenting out the above .thens and un-commenting these
            .then(function(foo) {
                return foo.json();
            })
            .then(function(foo) {
                that.setState({allData: foo.allData});
            })
             ***************************************************************************/
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

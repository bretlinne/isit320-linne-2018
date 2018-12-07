import React, { Component } from 'react';
import './App.css';
import LinneHeader from "./LinneHeader";
import RadioLocal from './RadioLocal';

class App extends Component {
    render() {
        return (
            <div className="App">
                <LinneHeader/>
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

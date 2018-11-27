import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import elfDebugEnzyme from './ElfDebugEnzyme';
import ElfHeader from './ElfHeader';

configure({ adapter: new Adapter() });

describe('rest basic tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    /*we run a function called shallow on App module, which was imported
     * from App.js */
    it('renders h1 header', () => {
        const wrapper = shallow(<App />);
        // this console debug line dumps out the entire Render method of <App>
        console.log(wrapper.debug());
        // this using 'find()', only finds the h1 header in <App>
        console.log(wrapper.find('h1').debug());
    });

    it('renders h1 header', () => {
        const wrapper = shallow(<App />);
        //console.log(wrapper.debug());
        const unknown = <ElfHeader />;
        elfDebugEnzyme.getLast(wrapper, 'ElfHeader', true);

        // this is redundant; does same as elfDebugEnzyme
        //console.log(wrapper.find('h1').debug());
        expect(wrapper.contains(unknown)).toEqual(true);
    });
});

import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from './ElfHeader';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import elfDebugEnzyme from './ElfDebugEnzyme';

configure({ adapter: new Adapter() });

fdescribe('ElfHeader tests', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ElfHeader />, div);
    });

    /*we run a function called shallow on App module, which was imported
     * from App.js */
    it('renders h1 header', () => {
        const wrapper = shallow(<ElfHeader />);
        // this console debug line dumps out the entire Render method of <App>
        //console.log(wrapper.debug());
        // this using 'find()', only finds the h1 header in <App>
        //console.log(wrapper.find('h1').debug());
    });

    fit('renders h1 header', () => {
        const wrapper = shallow(<ElfHeader />);
        const unknown = <h1>System Check Refactor</h1>;
        elfDebugEnzyme.getLast(wrapper, 'h1', true);

        // this is redundant; does same as elfDebugEnzyme
        //console.log(wrapper.find('h1').debug());
        expect(wrapper.contains(unknown)).toEqual(true);
    });
});

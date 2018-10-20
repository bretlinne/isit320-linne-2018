import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import elfDebugEnzyme from './ElfDebugEnzyme';

configure({ adapter: new Adapter() });

const showMe = true;

describe('rest basic tests', function(){

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders initial value of paragraph with state.nine', () =>{
        const wrapper = shallow(<App/>);
        const unknown = <p className="App-intro">file: unknown</p>
        elfDebugEnzyme.getLast(wrapper, 'p', showMe);
        expect(wrapper.contains(unknown)).toEqual(true);
    });

    it('renders and reads H2 text', () =>{
       const wrapper = shallow(<App/>);
       const welcome = <h2>Welcome to React</h2>;
       elfDebugEnzyme.getLast(wrapper, 'h2', showMe);
       expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of File paragraph after button click', () =>{
        const wrapper = shallow(<App/>);
       const nineSign = <p className="App-intro">file: url-file.js</p>;
        elfDebugEnzyme.getLast(wrapper, 'button', showMe);
       wrapper.find('#getFile').simulate('click');
       expect(wrapper.contains(nineSign)).toBe(true);
    });
})

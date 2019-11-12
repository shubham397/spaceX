import React from 'react';
import Enzyme, { shallow } from 'enzyme';
// Import adapter so enzyme can work in react, version 16
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Header from './Header';

let headerComponent;

// Before mounting each test...
beforeEach(() => {
    headerComponent = shallow(<Header />);
});

// After mounting each test...
afterEach(() => {
    headerComponent.unmount();
});

// Run the test to see if we get anything from this component
it('renders without crashing', () => {
    expect(headerComponent.length).toBe(1);
});

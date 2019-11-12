import React from 'react';
import Enzyme, { shallow } from 'enzyme';
// Import adapter so enzyme can work in react, version 16
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Card from './Card';

let cardComponent;

// Before mounting each test...
beforeEach(() => {
    cardComponent = shallow(<Card />);
});

// After mounting each test...
afterEach(() => {
    cardComponent.unmount();
});

// Run the test to see if we get anything from this component
it('renders without crashing', () => {
    expect(cardComponent.length).toBe(1);
});

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
// Import adapter so enzyme can work in react, version 16
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Loading from './Loading';

let loadingComponent;

// Before mounting each test...
beforeEach(() => {
    loadingComponent = shallow(<Loading />);
});

// After mounting each test...
afterEach(() => {
    loadingComponent.unmount();
});

// Run the test to see if we get anything from this component
it('renders without crashing', () => {
    expect(loadingComponent.length).toBe(1);
});

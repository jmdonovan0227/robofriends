import { render } from '@testing-library/react';
import React from 'react';
import MainPage from '../components/MainPage';

// this will run before each of our tests
let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }

    wrapper = render(<MainPage { ...mockProps } />);
});

// to simplify this we can keep all redux logic in App.jsx and pass down all props
// to an additional component, MainPage.jsx
test('Renders main page without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Filters robots correctly', () => {
    // console.log(wrapper);
    // expect(wrapper.instance().filterRobots([])).toEqual([]);
});
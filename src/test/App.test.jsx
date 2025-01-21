import '@testing-library/jest-dom';
import React from 'react';
import Card from '../components/Card';
import CardList from '../components/CardList';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from '../components/SearchBox';
const user = userEvent.setup();

test('demo', () => {
    expect(true).toBe(true);
});

it('Renders Card component', () => {
    render(<Card />);
    expect(true).toBe(true);
});

// if our Card component, our snapshot test will fail.
// Snapshot testing is essentially taking a picture of what a component should look like so when
// the test fails we know something has changed. It is great for covering 'dumb' components and making
// sure they continue to render as expected.
it('snapshot testing example', () => {
    expect(render(<Card />)).toMatchSnapshot();
});

it('expect to render CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'JohnJohn',
            email: 'jsnow@gmail.com'
        }
    ];

    expect(render(<CardList robots={mockRobots} />)).toMatchSnapshot();
});

it('Tests user typing into searchbox', async() => {
    mockSearchFunc = jest.fn();
    render(<SearchBox searchChange={mockSearchFunc}/>);
    const input = screen.getByRole('robot-search');
    await user.type(input, 'Leanne');
    console.log('Value: ', input.value);
    expect(input).toHaveValue('Leanne');
});

// KEY NOTES FOR 12/6/2024, assign roles to simplify retrieving elements for testing => getRole()
// 1) Render the component
// 2) Use screen.getByRole('role') to get the specific element we want to manipulate
// 3) You can use React Testing Library and Jest Documentation to figure out how to simulate clicking, typing, etc.
// The example above types into our search field. If you have props you must mock those props otherwise test cases will
// fail, meaning if there are props you need to mock props. If you want to verify that functions were called you can refer
// to our practice folder for jest to determine when an async call was made and how to determine if a mock function was called
// (spy on it). Use docs! And great job I am proud of you (myself haha)!
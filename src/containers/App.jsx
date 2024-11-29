import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    // Note if we only have one reducer we can access state by using state.statevarname, but
    // when we have multiple reducers we need to access state variables by => state.reducerFunction.statevarname
    // as different state exists for each reducer function (in this case).
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
};

// An action is just an object, we need dispatch to send our action to our reducer function
const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};

function App(props) {
    useEffect(() => {
        props.onRequestRobots();
    }, []);

    const { searchField, onSearchChange, robots, isPending } = props;

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ?
        <h1>Loading</h1> :

        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
}

// connect() is a higher order function = a function that returns another function,
// so in this case connect runs a function and after it completes, it will run another function
// on our container component App.
// connect helps our App component subscribe to any changes in the redux store.
// mapStateToProps = what state should I listen to, mapDispatchToProps = what actions should I listen to.
export default connect(mapStateToProps, mapDispatchToProps)(App);

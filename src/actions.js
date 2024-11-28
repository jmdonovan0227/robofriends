import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
};

// Request Robots function is a higher-order function. To understand what this is doing,
// we have a function 'requestRobots' which returns an anonymous function that takes a dispatch param,
// which is used inside of inner function block.
// Without redux thunk, redux would not understand this because we are not returning an object as it
// expects. But with thunk, it will realize "Hey, this is a function. Here is a dispatch." so we can
// handle asynchronous actions like fetch calls.
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
        return response.json();
    }).then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};
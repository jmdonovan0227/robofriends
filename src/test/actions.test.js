import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "../constants";

import * as actions from '../actions';

import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
// we are passing thunk middleware to mock store
const mockStore = configureMockStore([thunk]);

describe('setSearchField action', () => {
    test('should create an action to search robots', () => {
        const text = 'woo';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        };

        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });
});

describe('requestRobots action', () => {
    // const store = mockStore();
    // console.log('store', store);
    // const expectedAction = {
    //     type: REQUEST_ROBOTS_PENDING
    // };

    // store.dispatch(actions.requestRobots());
    // const action = store.getActions();
    // console.log(action);

    test('handles requesting robots API', () => {
        // expect(action[0]).toEqual(expectedAction);
    });
});
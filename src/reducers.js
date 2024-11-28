import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";

// 3 principles of redux => 1) Single source of truth, which means one large state object that 
// describes our app (this is initialState). 2) State is read-only, meaning we should never modify
// the single source of truth (initialState). 3) Changes using pure functions, meaning with every action
// that has the same inputs we will get the same outputs.
const initialStateSearch = {
    searchField: ''
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            console.log(action.type)
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
};

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;
    }
};
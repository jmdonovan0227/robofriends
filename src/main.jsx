import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// Use combine reducers to combine all reducers into a root reducer that we can give to the store.
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
// use thunk for asynchronous actions such as populating a state variable that uses a fetch call
// to update data.
// Thunk will wait to see if any actions returns a function instead of an object
import { thunk } from 'redux-thunk';
import './index.css';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
// combine reducers to create a root reducer
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {sideBarChange, contents} from '../reducers/reducers.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;

const store = createStore(
    combineReducers({
        sideBarChange,
        contents,
        routing: routerReducer
    }),
    composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export default store;
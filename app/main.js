/**
 * Created by LucasHC.
 */

import './style/reset.css';
import './style/icon.css';
import 'normalize.css/normalize.css';

import React from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import AppIndex from './components/appIndex.js';
import store from './store/store.js';


const history = syncHistoryWithStore(hashHistory, store);

import {Router, Route, IndexRoute} from 'react-router';

import HomeView from './components/homeView';

const mapStateToProps = (state) => {
    return {
        showLeftNav: state.sideBarChange.showLeftNav,
        loading: state.contents.loading,
        contents: state.contents.contents,
        currentChanel: state.contents.currentChanel
    }
}

var App = connect(mapStateToProps)(AppIndex);
render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="home" component={HomeView}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
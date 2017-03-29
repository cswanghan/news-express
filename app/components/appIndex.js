//ES6
import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {connect} from 'react-redux';

import * as action from '../actions/actions.js';

import NavBar from './navBar';
import Sidebar from './sidebar';
import RouterWrap from './routerWrap';

import HomeView from './homeView';

import '../style/app.less';

class AppIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="application">
                <div className="application-head">
                    <NavBar changeSidebarSt={()=>{this.props.dispatch(action.changeSideBarState())}}/>
                </div>

                <div className="application-view">
                    <HomeView loading={this.props.loading}  fetchContents={(source)=>{this.props.dispatch(action.fetchContents(source))}} contents={this.props.contents} currentChanel={this.props.currentChanel}/>
                </div>

                <Sidebar showLeftNav={this.props.showLeftNav} fetchContents={(source)=>{this.props.dispatch(action.fetchContents(source))}} changeSidebarSt={()=>{this.props.dispatch(action.changeSideBarState())}}/>
            </div>
        )
    }
}

export default AppIndex
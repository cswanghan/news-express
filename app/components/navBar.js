import React from 'react';
import {hashHistory} from 'react-router';
import '../style/navbar.less';

class Navbar extends React.Component {
    render() {
        return (
            <nav id="toolbar">
                <h1>
                    <a href="javascript: void 0;" onClick={event => {this.props.changeSidebarSt()}}>
                        <div className="toolbar-title-icon" >
                        <i className="iconfont icon-list"></i>
                        </div>
                        <div className="toolbar-title">
                            Live News
                        </div>
                    </a>
                </h1>
                <div id="nav-right">
                    <a className="user">
                        <i className="iconfont icon-user"></i>
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navbar;
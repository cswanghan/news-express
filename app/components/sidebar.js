import React from 'react';
import {hashHistory} from 'react-router';
import * as action from '../actions/actions.js';

import '../style/sidebar.less';

// UI组件不建议通过connect，自己触发dispatch，而是通过层层props向上传递到容器组件去dispatch
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {showLeftNav} = this.props;
        return (
            <aside className="application-sidebar">
                <div className="sidebar-container sidebar-transition" style={showLeftNav?{opacity:1,zIndex:99}:{opacity:0,zIndex:-1}}>
                    <div className="sidebar-overlay">
                        <nav className="leftNav-transition">
                            <ul>
                                <li onClick={()=>{this.props.fetchContents('bbc-news');this.props.changeSidebarSt()}}>
                                    <a >
                                        <span>BBC News</span>
                                        <i className="iconfont icon-arrow-right right"></i>
                                    </a>
                                </li>
                                <li onClick={()=>{this.props.fetchContents('bbc-sport');this.props.changeSidebarSt()}}>
                                    <a >
                                        <span>BBC Sport</span>
                                        <i className="iconfont icon-arrow-right right"></i>
                                    </a>
                                </li>
                                <li onClick={()=>{this.props.fetchContents('cnn');this.props.changeSidebarSt()}}>
                                    <a >
                                        <span>CNN</span>
                                        <i className="iconfont icon-arrow-right right"></i>
                                    </a>
                                </li>
                                <li onClick={()=>{this.props.fetchContents('espn');this.props.changeSidebarSt()}}>
                                    <a >
                                        <span>ESPN</span>
                                        <i className="iconfont icon-arrow-right right"></i>
                                    </a>
                                </li>
                                <li onClick={()=>{this.props.fetchContents('financial-times');this.props.changeSidebarSt()}}>
                                    <a >
                                        <span>Financial Times</span>
                                        <i className="iconfont icon-arrow-right right"></i>
                                    </a>
                                </li>
                                <li onClick={()=>{this.props.fetchContents('usa-today');this.props.changeSidebarSt()}}>
                                    <a >
                                        <span>USA Today</span>
                                        <i className="iconfont icon-arrow-right right"></i>
                                    </a>
                                </li>
                                <li onClick={()=>{this.props.fetchContents('mtv-news');this.props.changeSidebarSt()}}>
                                    <a >
                                        <span>MTV News</span>
                                        <i className="iconfont icon-arrow-right right"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>
        )
    }
}

export default Sidebar;

                                    
                                    
                                    
                                    
                                    




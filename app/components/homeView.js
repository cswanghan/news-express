import React from 'react';
import {hashHistory } from 'react-router';

import BillboardCarousel from './billboardCarousel';
import CurrentChanel from './currentChanel';
import Loading from './loading';

class HomeView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //获取内容
        this.props.fetchContents('bbc-news');
    }
    render() {
        const dividingLineStyle = {
            position: 'relative',
            marginTop: '30px',
            marginBottom: '30px',
            borderBottom: '1px solid #a8a8a8'
        }
        const watchingTitle = {
            width: '120px',
            height: '20px',
            margin: '0 auto',
            marginBottom: '-10px',
            borderRadius: '10px',
            fontSize: '10px',
            lineHeight: '20px',
            textAlign: 'center',
            color: '#eee',
            backgroundColor: '#a7a7a7'
        }
        let loading = this.props.loading;
        let view = loading ? <Loading></Loading> : (
            <div>
                <BillboardCarousel contents={this.props.contents}/>
                <div className="dividing-line" style={dividingLineStyle}>
                    <div className="watching-title" style={watchingTitle}>
                        {this.props.currentChanel}
                    </div>
                </div>
                <div className="movie">
                    <CurrentChanel contents={this.props.contents}/>
                </div>
            </div>
        )
        return view
    }
}

export default HomeView;
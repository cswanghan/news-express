import React from 'react';
import ImagePlaceholder from './imagePlaceholder';
import moment from 'moment';
import '../style/currentChanel.less';

class CurrentChanel extends React.Component {
    render() {
        const {contents} = this.props;
        let view = contents && Array.isArray(contents) ? (
                <ul>
                    {
                        contents.map((content,i)=>
                            <ContentItem key={i} content={content}/>
                        )
                    }
                </ul>
            ) : 
            <div></div>
        return view
    }
}

class ContentItem extends React.Component {
    render() {
        const content = this.props.content;
        return (
            <li>
                <div className="movie-item">
                    <div className="movie-item-img">
                        <ImagePlaceholder imgSrc={content.urlToImage} placeholder="https://www.google.com.hk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjj-bzs3tfSAhVDgbwKHYL7CFYQjRwIBw&url=%68%74%74%70%73%3a%2f%2f%64%72%69%62%62%62%6c%65%2e%63%6f%6d%2f%73%68%6f%74%73%2f%31%31%38%35%30%31%38%2d%44%69%61%6d%6f%6e%64%2d%4c%6f%61%64%69%6e%67%2d%49%6e%64%69%63%61%74%6f%72%2d%47%49%46&psig=AFQjCNGiLD9Lf_N3Agt7aeqIV10BxMNJqA&ust=1489640822556777"/>
                    </div>
                    <div className="desc">
                        <h1>{content.title}</h1>
                        <div className="left">
                            <div className="film-name">
                                Abstract
                            </div>
                            <div className="bref">
                                {content.description}
                            </div>
                        </div>
                        <div className="right">
                            <div className="film-name">
                                Publish time
                            </div>
                            <div className="time">
                                {this.getTime(content.publishedAt)}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
    getTime(date){
        return moment(date).format('h:mm:ss');
    }
}


export default CurrentChanel
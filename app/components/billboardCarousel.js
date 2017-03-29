import React from 'react';
import ReactSwipe from 'react-swipe';
import ImagePlaceholder from './imagePlaceholder';

class BillboardCarousel extends React.Component {
    render() {
        let contents = this.props.contents;
        let view = contents && Array.isArray(contents) ? (
            <ReactSwipe key={contents.length} className="carousel" swipeOptions={{continuous: true, auto: 3000}}>
                {contents.map((v,i)=>
                    <div key={i}>
                        <a href={v.url}>
                            <ImagePlaceholder imgSrc={v.urlToImage} placeholder="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489644681768&di=2b78e7baf0749987d6bd1879b4d9f9f8&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F02dd4155c1c09a000001a5f0498dd6.gif" />
                        </a>
                    </div>
                )}
            </ReactSwipe>) : 
            <div></div>
        return view;
    }
}



export default BillboardCarousel;
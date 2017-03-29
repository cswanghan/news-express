import React from 'react';

class ImagePlaceholder extends React.Component {
    handleImageLoaded() {
        this.refs['image'].style.opacity = 1;
    }
    render() {
        const {imgSrc, placeholder} = this.props;
        const bgStyle = {backgroundImage: 'url('+placeholder+')', backgroundSize: '100%'};
        return (
            <div className="img-responsive" style={bgStyle} >
                <img ref="image" src={imgSrc} onLoad={this.handleImageLoaded.bind(this)} style={{width : 100+'%',height: '180px', transition:'all 1.2s ease',opacity:0}} />
            </div> 
        )
    }
}

export default ImagePlaceholder;
import React from 'react';

class Loading extends React.Component {
    render() {
        return (
            <div style={{textAlign:'center',marginTop:'150px'}}>
                <p style={{margin:0,padding:'0.2em 0.3em 0.2em 0'}}>
                </p>
                <p style={{margin:0,padding:'0.2em 0 0.2em 1em',fontSize:'12px',color:'#777'}}>Loading, please wait......</p>
            </div>
        )
    }
}

export default Loading;
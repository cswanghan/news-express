import React from 'react'

class RouterWrap extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {children} = this.props;
        return (
            <div>{children}</div>
        )
    }
}


export default RouterWrap

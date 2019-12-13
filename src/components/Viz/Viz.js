import React, { Component } from 'react'

class Viz extends Component {
    constructor(props) {
        super(props);
        this.vizRef = React.createRef();
    }
    componentDidMount() {
        props.draw(this.vizRef.current, this.props.data)
    }
    componentDidUpdate() {
        props.draw(this.vizRef.current, this.props.data)
    }
    render() {
        return (
            <div className={`viz ${props.className || ''}`} ref={this.vizRef} />
        )
    }
}

export default Viz
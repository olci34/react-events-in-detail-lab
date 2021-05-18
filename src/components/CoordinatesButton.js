// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component {

    clickHandler(e) {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler.bind(this)}>Coordinate Button</button>
            </div>
        )
    }
}

export default CoordinatesButton
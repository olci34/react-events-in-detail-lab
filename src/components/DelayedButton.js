// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {

    delayHandler(e) {
        e.persist()
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
    }

    render() {
        return (
            <div>
                <button onClick={this.delayHandler.bind(this)} > Delay Button</button>
            </div>
        )
    }
}

export default DelayedButton
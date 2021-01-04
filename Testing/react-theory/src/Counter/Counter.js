import React, {Component} from 'react'

export default class Counter extends Component {
    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    minCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }



    render() {
        return [
                <h1 key='1'>Counter {this.state.counter}</h1>,
                <button key='2' onClick={this.addCounter}>+</button>,
                <button key='3'onClick={this.minCounter}>-</button>
        ]
    }
}
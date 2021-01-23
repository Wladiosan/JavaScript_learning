import React, {Component} from 'react'

const state = {
    menu: false
}

class Qwe extends Component {

    state = {
        menu1: false
    }

    render() {

        const onHandler = () => {
            this.setState({
                ...state, menu: false
            })
        }

        return (
            <button onClick={onHandler}>123</button>
        );
    }
}

export default Qwe
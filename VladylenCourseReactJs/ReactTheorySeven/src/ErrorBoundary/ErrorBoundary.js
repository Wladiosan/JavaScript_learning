import React from 'react'

export default class ErrorBoundary extends React.Component {

    state = {
        // state.hasError - Наличие ошибки в компоненте (Car)
        hasError: false
    }

    // Ф-ция при наличии Error в компоненте Car меняет state.hasError на true
    /* componentDidCatch(error, info) {
        this.setState({hasError: true})
    }*/

    render() {
        if (this.state.hasError) {
            return (
                <h1
                    style={{color: 'red'}}
                >This block do not work now and Something went wrong
                </h1>)
        }

        return this.props.children
    }

}


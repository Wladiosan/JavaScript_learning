import React from 'react'

export default class ErrorBoundary extends React.Component {

    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

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


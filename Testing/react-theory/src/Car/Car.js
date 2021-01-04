import React from 'react'
/*import Radium from "radium";*/
import './Car.css'

class Car extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log('Car componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate', nextProps, nextState)
        return nextProps.name.trim() !== this.props.name.trim()
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Car componentWillUpdate', nextProps, nextState)
    }

    /*static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps', nextProps, prevState)
        return  prevState
    }*/

    componentDidUpdate() {
        console.log('Car componentDidUpdate')
    }


    // Сохранение информации до перерисовки (рендера) компонента
    /*getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Car getSnapshotBeforeUpdate')
    }*/

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('Car run render')
        
        if (Math.random() > 0.7){
             throw new Error('Car random failed ')
        }

        const inputClasses = ['input']
        const styleDiv = {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
            ':hover': {
                border: '1px solid #aaa',
                boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
                cursor: 'pointer'
            }
        }

        if (this.props.name !== '') {
            inputClasses.push('green')
        } else inputClasses.push('red')

        return (
            <div style={styleDiv} className="Car">
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    type='text'
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Car
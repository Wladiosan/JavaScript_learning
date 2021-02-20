import React from 'react'
import classes from './App.module.css'
import Header from './Components/Header/Header'
import Container from './Components/Container/Container'
import Basement from './Components/Basement/Basement'

class App extends React.Component {
    render() {
        return (
            <div className={classes.App}>
                <Header />
                <Container />
                <Basement />
            </div>
        )
    }
}

export default App;

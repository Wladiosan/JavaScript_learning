import React from 'react';
import './App.css'
import Header from './componenta/Header/Header';
import Navbar from './componenta/Navbar/Navbar';
import Content from "./componenta/Content/Content";

function App(props) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Content state={props.state}/>
            </div>
    );
}

export default App;

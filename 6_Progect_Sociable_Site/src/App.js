import React from 'react';
import './App.css'
import Header from './componenta/Header/Header';
import Navbar from './componenta/Navbar/Navbar';
import {BrowserRouter} from "react-router-dom"
import Content from "./componenta/Content/Content";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Content posts={props.posts} dialogs={props.dialogs} messages={props.messages}/>
            </div>
        </BrowserRouter>
    );
}

export default App;

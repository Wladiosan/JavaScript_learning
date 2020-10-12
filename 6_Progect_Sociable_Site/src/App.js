import React from 'react';
import './App.css'
import Header from './componenta/Header/Header';
import Navbar from './componenta/Navbar/Navbar';
import Profile from './componenta/Profile/Profile';

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route />
                {/*<Profile/>*/}
            </div>
        </div>
    );
}

export default App;

import React from "react";
import {Route} from "react-router-dom"
import s from './Content.module.css'
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Content = (props) => {
    return (
        <div className={s.content}>
            <Route path='/profile' render={() => <Profile posts={props.posts}/>} /*component={Dialogs}*//>
            <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
            <Route path='/news' render={() => <News/>} /*component={News}*//>
            <Route path='/music' render={() => <Music/>} /*component={Music}*//>
            <Route path='/settings' render={() => <Settings/>} /*component={Settings}*//>
        </div>
    )
}

export default Content;
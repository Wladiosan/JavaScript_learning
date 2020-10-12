import React from "react";
import Route from "react-router-dom/es/Route";
import s from './Content.module.css'
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";


const Content = () => {
    return (
            <div className={s.content}>
                <Route path='/profile' component={Profile} />
                <Route path='/dialogs' component={Dialogs} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>
    )
}

export default Content;
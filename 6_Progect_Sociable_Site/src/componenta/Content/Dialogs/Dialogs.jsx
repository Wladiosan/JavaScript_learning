import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>123</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name='Veronika'/>
                <DialogItem id='2' name='Yanina'/>
                <DialogItem id='3' name='Ksenia'/>
                <DialogItem id='4' name='Anastasia'/>
                <DialogItem id='5' name='Maria'/>
                <DialogItem id='6' name='Lilia'/>
                <DialogItem id='7' name='Kira'/>
            </div>
            <div className={s.messages}>
                <Message/>
                <Message/>
                <Message/>
            </div>
        </div>
    )
}

export default Dialogs;
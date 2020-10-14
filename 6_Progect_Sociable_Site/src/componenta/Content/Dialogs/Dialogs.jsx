import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsDate = [{id: '1', name: 'Veronika'}, {id: '2', name: 'Yanina'}, {id: '3', name: 'Ksenia'}, {
        id: '4',
        name: 'Anastasia'
    }, {id: '5', name: 'Maria'}, {id: '6', name: 'Lilia'}, {id: '7', name: 'Kira'},]

    let messagesDate = [
        {id: '1', message: 'Hi!'}, {id: '2', message: 'How are you?'}, {id: '3', message: 'Fine, are you?'}, {
            id: '4',
            message: 'Fine, too!'
        },]

    let dialogs = dialogsDate.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messages = messagesDate.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogs}</div>
            <div className={s.messages}>{messages}</div>
        </div>
    )
}

export default Dialogs;
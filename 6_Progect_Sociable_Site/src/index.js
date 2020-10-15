import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: '1', message: 'Hi, how are you?', counterLike: '15'},
    {id: '2', message: 'It\'s my first post', counterLike: '21'}
]

let dialogs = [
    {id: '1', name: 'Veronika'},
    {id: '2', name: 'Yanina'},
    {id: '3', name: 'Ksenia'},
    {id: '4', name: 'Anastasia'},
    {id: '5', name: 'Maria'},
    {id: '6', name: 'Lilia'},
    {id: '7', name: 'Kira'}
]

let messages = [
    {id: '1', message: 'Hi!'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'Fine, are you?'},
    {id: '4', message: 'Fine, too!'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

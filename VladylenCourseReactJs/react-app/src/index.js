import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from "./redux/rootReducer";

/*function loggerMiddleWare(store) {
    return function (next) {
        return function (active) {
            const result = next(active)
            console.log('MiddleWare-result: ', result)
            console.log('MiddleWare-store: ', store.getState())
            return result
        }
    }
}*/

const loggerMiddleWare = store => next => active => {
    const result = next(active)
    console.log('MiddleWare-result: ', result)
    console.log('MiddleWare-store: ', store.getState())
    return result
}


const store = createStore(rootReducer, applyMiddleware(loggerMiddleWare))

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
reportWebVitals();

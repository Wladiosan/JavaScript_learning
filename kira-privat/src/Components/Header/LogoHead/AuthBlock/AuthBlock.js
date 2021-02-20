import React from 'react'
import classes from './AuthBlock.module.css'
import logo1 from '../../../../images/svg/lock-solid.svg'
import logo2 from '../../../../images/svg/user-solid.svg'
import Error from '../../../../error'

const AuthBlock = props => {
    return (
        <div className={classes.AuthBlock}>
            <a href="" onClick={Error}>
                <div>
                    <img src={logo1} alt="lock-solid.svg"/>
                    Вход
                </div>
            </a>
            <hr/>
            <a href="" onClick={Error}>
                <div>
                    <img src={logo2} alt="user-solid.svg"/>
                    Регистрация
                </div>
            </a>
        </div>
    )
}

export default AuthBlock



import React from 'react'
import classes from './LogoBlock.module.css'
import logo from '../../../../images/logo.png'
import svg from '../../../../images/svg/angle-down-solid.svg'
import Error from '../../../../error'

const LogoBlock = props => {
    return (
        <div className={classes.LogoBlock}>
                <a href="" onClick={Error}><img src={logo} alt="logo.png"/></a>
                <div className={classes.AllProstituteBtn} onClick={Error}>
                    Проститутки
                    <img src={svg} alt="arrow-down-solid.svg"/>
                </div>
        </div>
    )
}

export default LogoBlock
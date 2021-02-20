import React from 'react'
import classes from './LogoHead.module.css'
import LogoBlock from './LogoBlock/LogoBlock'
import AuthBlock from './AuthBlock/AuthBlock'

const LogoHead = props => {
    return (
        <div className={classes.LogoHead}>
            <LogoBlock />
            <AuthBlock />
        </div>
    )
}

export default LogoHead
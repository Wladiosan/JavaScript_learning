import React from 'react'
import classes from './Header.module.css'
import LogoHead from './LogoHead/LogoHead'
import MainMenu from './MainMenu/MainMenu'
import PageNavigation from './PageNavigation/PageNavigation'

const Header = props => {
    return (
        <div className={classes.Header}>
            <LogoHead />
            <MainMenu />
            <PageNavigation />
        </div>
    )
}

export default Header
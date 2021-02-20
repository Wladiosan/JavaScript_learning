import React from 'react'
import classes from './MainMenu.module.css'
import Menu from './Menu/Menu'
import Search from './Search/Search'

const MainMenu = props => {
    return (
        <div className={classes.MainMenu}>
            <Menu />
            <Search />
        </div>
    )
}

export default MainMenu
import React from 'react'
import classes from './Menu.module.css'
import svg from '../../../../images/svg/angle-down-solid.svg'
import Error from '../../../../error'

const Menu = props => {

    const cls = [
        classes.MenuItem,
        classes.MenuItemFirst
    ]

    return (
        <div className={classes.Menu}>
            <a href="" onClick={Error}>
                <div className={cls.join(' ')}>
                    Популярное &nbsp;
                    <img src={svg} alt="angle-down-solid.svg"/>
                </div>
            </a>
            <a href="" onClick={Error}>
                <div className={classes.MenuItem}>
                    Районы &nbsp;
                    <img src={svg} alt="angle-down-solid.svg"/>
                </div>
            </a>
            <a href="" onClick={Error}>
                <div className={classes.MenuItem}>
                    Метро &nbsp;
                    <img src={svg} alt="angle-down-solid.svg"/>
                </div>
            </a>
            <a href="" onClick={Error}>
                <div className={classes.MenuItem}>
                    Услуги &nbsp;
                    <img src={svg} alt="angle-down-solid.svg"/>
                </div>
            </a>
        </div>
    )
}

export default Menu
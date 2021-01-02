import React from 'react'
import s from './NavBar.module.css'
import navLogo from '../../images/navLogo.png';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className={s.navBar}>
            <div className={s.navLogo}>
                <img src={navLogo} alt='navLogo'/>
            </div>
            <nav className={s.navMenu}>
                <div className={s.menuItem}>
                    <NavLink to='/'>ГЛАВНАЯ</NavLink>
                </div>
                <div className={s.menuItem}>
                    <NavLink to='/'>УСЛУГИ</NavLink>
                </div>
                <div className={s.menuItem}>
                    <NavLink to='/'>КОНТАКТЫ</NavLink>
                </div>
                <div className={s.menuItem}>
                    <NavLink to='/'>ОТЗЫВЫ</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
import React from 'react';
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://autodoktor.com.ua/wp-content/uploads/Logo/Total-logo-earth.png' alt='123' />
        </header>
    )
}

export default Header;
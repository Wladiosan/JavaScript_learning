import React from 'react'
import s from './Menu.module.css'
import MenuLogo from "./MenuLogo/MenuLogo";
import MenuNav from "./MenuNav/MenuNav";
import MenuInfo from "./MenuInfo/MenuInfo";

function Menu (){
    return (
        <div className={s.main_menu}>
            <MenuLogo />
            <MenuNav />
            <MenuInfo />
        </div>
    )
}

export default Menu
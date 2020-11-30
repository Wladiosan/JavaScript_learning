import React from 'react'
import s from "./MenuNav.module.css";
import NavButton from "./NavButton/NavButton";

function MenuNav (){
    return (
        <div className={s.menu_nav}>
            <NavButton nameBtn='РАКИ'/>
            <NavButton nameBtn='БУКЕТЫ'/>
            <NavButton nameBtn='ОТЗЫВЫ'/>
            <NavButton nameBtn='ДОСТАВКА'/>
            <NavButton nameBtn='НОВОСТИ'/>
            <NavButton nameBtn='КОНТАКТЫ'/>
        </div>
    )
}

export default MenuNav
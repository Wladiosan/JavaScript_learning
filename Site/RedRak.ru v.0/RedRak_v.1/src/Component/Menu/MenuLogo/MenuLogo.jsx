import React from 'react'
import s from './MenuLogo.module.css'
import menulogo from './menu_logo.png'


function MenuLogo (){
    return (
        <div className={s.menu_logo}>
            <a href='#'><img src={menulogo}/></a>
        </div>
    )
}

export default MenuLogo
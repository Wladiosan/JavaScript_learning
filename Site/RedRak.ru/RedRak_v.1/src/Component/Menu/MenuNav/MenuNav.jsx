import React from 'react'
import s from "./MenuNav.module.css";

function MenuNav (){
    return (
        <div className={s.menu_nav}>
                <a><div>РАКИ</div></a>
                <a><div>БУКЕТЫ</div></a>
                <a><div>ОТЗЫВЫ</div></a>
                <a><div>ДОСТАВКА</div></a>
                <a><div>НОВОСТИ</div></a>
                <a><div>КОНТАКТЫ</div></a>
        </div>
    )
}

export default MenuNav
import React from 'react'
import s from "./MenuInfo.module.css";
import insta from './images/insta.png'

function MenuInfo(){
    return(
        <div className={s.menu_info}>
            <div className={s.info_phone}>1</div>
            <div className={s.info_insta}>
                <div className={s.insta_square}>
                    <a href='#'><img src={insta} /></a>
                </div>
            </div>
        </div>
    )
}

export default MenuInfo
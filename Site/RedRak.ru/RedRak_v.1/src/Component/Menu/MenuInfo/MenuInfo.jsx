import React from 'react'
import s from "./MenuInfo.module.css";
import InfoPhone from "./InfoPhone/InfoPhone";
import InfoInsta from "./InfoInsta/InfoInsta";

function MenuInfo(){
    return(
        <div className={s.menu_info}>
            <InfoPhone />
            <InfoInsta />
        </div>
    )
}

export default MenuInfo
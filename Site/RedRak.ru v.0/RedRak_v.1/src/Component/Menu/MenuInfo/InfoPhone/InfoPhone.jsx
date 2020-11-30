import React from 'react'
import s from "./InfoPhone.module.css";

function InfoPhone(){
    return(
            <div className={s.info_phone}>
                <div className={s.phone_number}><a href='#'>8 (800) 511 85 10</a></div>
                <div className={s.phone_text}>* по России звонок бесплатный</div>
            </div>
    )
}

export default InfoPhone
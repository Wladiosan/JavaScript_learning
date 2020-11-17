import React from 'react'
import s from './InfoInsta.module.css'
import insta from './images/insta.png'

function InfoInsta(){
    return(
            <div className={s.info_insta}>
                <div className={s.insta_square}>
                    <a href='#'><img src={insta} /></a>
                </div>
            </div>
    )
}

export default InfoInsta
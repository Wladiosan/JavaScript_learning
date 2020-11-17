import React from 'react'
import content_block_info from './images/content_block_info.png'
import s from './ContentBlockInfo.module.css'

function ContentBlockInfo(){
    return(
        <div className={s.content_block_info}>
            <div className={s.block_info_left}><img src={content_block_info}/></div>
            <div className={s.block_info_right}>
                <div>МЫ ВАРИМ И ДОСТАВЛЯЕМ <span>- БЕСПЛАТНО!</span></div>
                <div>условия доставки смотрите <a href='#'>ниже</a></div>
            </div>
        </div>
    )
}

export default ContentBlockInfo
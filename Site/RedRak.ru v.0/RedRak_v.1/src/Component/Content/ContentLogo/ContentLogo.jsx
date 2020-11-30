import React from 'react'
import topbackgroung from './images/topbackground.jpg'
import s from './ContentLogo.module.css'

function ContentLogo (){
    return (
        <div className={s.content_logo}>
            <img src={topbackgroung} />
        </div>
    )
}

export default ContentLogo
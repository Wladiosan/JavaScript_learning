import React from 'react'
import topbackgroung from './images/topbackground.jpg'
import s from './Content.module.css'

function Content (){
    return (
        <div className={s.main_content}>
            <img src={topbackgroung} />
        </div>
    )
}

export default Content
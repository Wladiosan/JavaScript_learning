import React from 'react'
import classes from './Basement.module.css'
import Error from '../../error'
import svg1 from '../../images/svg/drawing.svg'
import svg2 from '../../images/svg/caret-square-down-regular.svg'


const Basement = props => {
    return (
        <div className={classes.Basement}>
            <div className={classes.LeftSide}>
                <div className={classes.LeftTop}>
                    <a href="" onClick={Error}><span>Статьи</span></a>&nbsp;&nbsp;&nbsp;
                    <hr/>&nbsp;&nbsp;&nbsp;
                    <a href="" onClick={Error}><span>Обратная связь</span></a>
                </div>
                <a href="" onClick={Error}>
                    <div className={classes.Languages}>
                        <img src={svg1} alt="globe-solid.svg"/>&nbsp;&nbsp;
                        Русский&nbsp;&nbsp;
                        <img src={svg2} alt="caret-square-down-regular.svg" style={{background:'white'}}/>
                    </div>
                </a>
            </div>
            <div className={classes.RightSide}>
                <p>Сайт предназначен для лиц, которые достигли 18 лет. Администрация сайта не несет ответственности за размещенные объявления. Все объявления собственность рекламодателей.</p>
                &nbsp;
                <p>© 2009-2021 RelaxKiev.com. Копирование материалов запрещено.</p>
            </div>
        </div>
    )
}

export default Basement
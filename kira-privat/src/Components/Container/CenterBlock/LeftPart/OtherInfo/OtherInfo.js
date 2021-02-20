import React from 'react'
import classes from './OtherInfo.module.css'
import svg1 from '../../../../../images/svg/profile-info.svg'

const OtherInfo = props => {
    return (
        <div className={classes.OtherInfo}>
            <div className={classes.OtherLogo}>
                <img src={svg1} alt="profile-info.svg"/>
                Параметры
            </div>
            <div className={classes.OtherPlaces}>
                <div className={classes.LeftSide}>
                    <div>Выезд</div>
                    <div className={classes.LeftSideEnd}>Владение языками</div>
                </div>
                <div className={classes.RightSide}>
                    <div>Апартаменты Гостиница</div>
                    <div className={classes.RightSideEnd}>Русский Украинский Английский</div>
                </div>
            </div>
        </div>
    )
}

export default OtherInfo
import React from 'react'
import classes from './ProfileInfo.module.css'
import svg1 from '../../../../../images/svg/profile-info.svg'

const ProfileInfo = props => {
    return (
        <div className={classes.ProfileInfo}>
            <div className={classes.ProfileLogo}>
                <img src={svg1} alt="profile-info.svg"/>
                Параметры
            </div>
            <div className={classes.ProfilePlaces}>
                <div className={classes.LeftSide}>
                    <div>Возраст</div>
                    <div>Рост</div>
                    <div>Вес</div>
                    <div>Бюст</div>
                    <div className={classes.LeftSideEnd}>Цвет волос</div>
                </div>
                <div className={classes.RightSide}>
                    <div>20 лет</div>
                    <div>175 см.</div>
                    <div>54 кг.</div>
                    <div>2</div>
                    <div className={classes.RightSideEnd}>Блонд</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
import React from 'react'
import classes from './Location.module.css'
import svg1 from '../../../../../images/svg/location.svg'

const Location = props => {
    return (
        <div className={classes.Location}>
            <div className={classes.LocationLogo}>
                <img src={svg1} alt="location.svg"/>
                Местоположение
            </div>
            <div className={classes.LocationPlaces}>
                <div className={classes.LeftSide}>
                    <div>Страна</div>
                    <div>Город</div>
                    <div>Район</div>
                    <div className={classes.LeftSideEnd}>Метро</div>
                </div>
                <div className={classes.RightSide}>
                    <div>Украина</div>
                    <div>Киев</div>
                    <div>Деснянский</div>
                    <div className={classes.RightSideEnd}>Дарница</div>
                </div>
            </div>
        </div>
    )
}

export default Location
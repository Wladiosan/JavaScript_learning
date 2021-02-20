import React from 'react'
import classes from './Price.module.css'
import svg1 from '../../../../../images/svg/wallet.svg'

const Price = props => {
    return (
        <div className={classes.Price}>
            <div className={classes.OtherLogo}>
                <img src={svg1} alt="wallet.svg"/>
                Стоимость
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

export default Price
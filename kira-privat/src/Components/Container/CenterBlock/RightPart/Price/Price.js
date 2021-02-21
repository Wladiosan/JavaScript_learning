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
                    <div>Время</div>
                    <div>1 час</div>
                    <div>2 часа</div>
                    <div className={classes.LeftSideEnd}>Ночь</div>
                </div>
                <div className={classes.CenterSide}>
                    <div>В апартаментах</div>
                    <div>2000</div>
                    <div>4000</div>
                    <div>12000</div>
                </div>
                <div className={classes.RightSide}>
                    <div>Выезд</div>
                    <div>2000</div>
                    <div>4000</div>
                    <div className={classes.RightSideEnd}>12000</div>
                </div>
            </div>
        </div>
    )
}

export default Price
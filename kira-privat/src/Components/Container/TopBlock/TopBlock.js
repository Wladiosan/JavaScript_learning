import React from 'react'
import classes from './TopBlock.module.css'

const TopBlock = props => {
    return (
        <div className={classes.TopBlock}>
            <div className={classes.TopBlockInfo}>
                <span>Главная</span>&nbsp;&nbsp;&nbsp;&raquo;&nbsp;&nbsp;&nbsp;<span>Анкета № 58865</span>
            </div>
            <div className={classes.Labels}>
                <div className={classes.LabelProstitute}>
                    Анкета проститутки № 58865
                </div>
                <div className={classes.LabelMarks}>
                    <div className={classes.MarkVip}>VIP</div>
                    &nbsp;&nbsp;
                    <div className={classes.MarkNew}>Новая</div>
                </div>
            </div>
        </div>
    )
}

export default TopBlock
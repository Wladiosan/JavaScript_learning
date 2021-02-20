import React from 'react'
import classes from './CenterBlock.module.css'
import LeftPart from './LeftPart/LeftPart'
import RightPart from './RightPart/RightPart'

const CenterBlock = props => {
    return (
        <div className={classes.CenterBlock}>
            <LeftPart />
            <RightPart />
        </div>
    )
}

export default CenterBlock
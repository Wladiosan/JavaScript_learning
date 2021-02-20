import React from 'react'
import classes from './RightPart.module.css'
import PhotoBlock from './PhotoBlock/PhotoBlock'
import AboutInfo from './AboutInfo/AboutInfo'
import Price from './Price/Price'


const RightPart = props => {
    return (
        <div className={classes.RightPart}>
            <PhotoBlock />
            <AboutInfo />
            <Price />
        </div>
    )
}

export default RightPart
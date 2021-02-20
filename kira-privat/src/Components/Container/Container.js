import React from 'react'
import classes from './Container.module.css'
import TopBlock from './TopBlock/TopBlock'
import CenterBlock from './CenterBlock/CenterBlock'


const Container = props => {
    return (
        <div className={classes.Container}>
            <TopBlock />
            <CenterBlock />
        </div>
    )
}

export default Container
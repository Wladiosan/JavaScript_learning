import React from 'react'
import classes from './PageNavigation.module.css'
import Error from '../../../error'

const PageNavigation = props => {
    return (
        <div className={classes.PageNavigation}>
            <a href="" onClick={Error}>
                <div className={classes.Catalog}>
                    &lt;&nbsp;&nbsp;&nbsp;В каталог
                </div>
            </a>
            <div className={classes.PageHandler}>
                <a href=""  onClick={Error}>
                    <div className={classes.PageLeft}>&lt;</div>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href=""  onClick={Error}>
                    <div className={classes.PageRight}>&gt;</div>
                </a>
            </div>
        </div>
    )
}

export default PageNavigation
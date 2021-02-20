import React from 'react'
import classes from './Search.module.css'
import svg from '../../../../images/svg/filter-solid.svg'
import Error from '../../../../error'

const Search = props => {
    return (
        <div className={classes.Search}>
            <a href="" onClick={Error}>
                <img src={svg} alt="filter-solid.svg"/>
                Расширенный поиск
            </a>
        </div>
    )
}

export default Search
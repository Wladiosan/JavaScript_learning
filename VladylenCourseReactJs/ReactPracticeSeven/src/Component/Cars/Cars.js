import React from 'react'
import classes from './Cars.module.css'

const Car = props => {

    const cars = [
        {id: 1, name: 'BMW', year: 2018},
        {id: 2, name: 'MERCEDES', year: 2010},
        {id: 3, name: 'VOLKSWAGEN', year: 2012}
    ]

    return (
    <React.Fragment>
            {cars.map((car, index) => {
                return (
                    <div
                        className={classes.Car}
                        key={index}
                    >
                        <h3>{car.name}</h3>
                        <h4>{car.year}</h4>
                    </div>
                )
            })}
    </React.Fragment>
    )
}

export default Car
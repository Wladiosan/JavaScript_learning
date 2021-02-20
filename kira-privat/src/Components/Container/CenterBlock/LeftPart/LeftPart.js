import React from 'react'
import classes from './LeftPart.module.css'
import ContactInfo from './ContactInfo/ContactInfo'
import Location from './Location/Location'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import OtherInfo from './OtherInfo/OtherInfo'

const LeftPart = props => {
    return (
        <div className={classes.LeftPart}>
            <ContactInfo />
            <Location />
            <ProfileInfo />
            <OtherInfo />
        </div>
    )
}

export default LeftPart
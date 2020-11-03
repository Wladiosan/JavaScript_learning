import React from 'react';
import s from '../../Profile.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg'
                     id={s.imgContent} alt='123'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
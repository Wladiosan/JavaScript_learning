import React from 'react'
import classes from './ContactInfo.module.css'
import svg1 from '../../../../../images/svg/message-orange.svg'
import Error from '../../../../../error'

const ContactInfo = props => {
    return (
        <div className={classes.ContactInfo}>
            <div className={classes.FirstInfo}>
                <div className={classes.Name}>Кира</div>
                <a href="">
                    <div className={classes.Number}>+38(097)400-78-09</div>
                </a>
                <div className={classes.NumberInfo}>Звонить круглосуточно</div>
            </div>
            <div className={classes.SecondInfo}>
                Обязательно сообщите девушке, что нашли ее номер телефона на сайте РелаксКиев.ком.
            </div>
            <div className={classes.ThirdInfo}>
                <a href="" onClick={Error}>
                    <div className={classes.Message}>
                        <img src={svg1} alt="message-orange.svg"/>
                        <div>Написать сообщение</div>
                    </div>
                </a>
            </div>
            <div className={classes.FourthInfo}>
                <h4>Остерегайтесь мошенников!</h4>
                <h5>Не переводите деньги на счёт мобильного или банковскую карту. Если вас об этом просят, сообщите нам.</h5>
            </div>
        </div>
    )
}

export default ContactInfo
import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from "../../UI/Backdrop/Backdrop";

// Масив элементов списка меню
const links = ['1', '2', '3']

class Drawer extends Component {

    // Метод создание элементов списка меню
    renderLinks() {
        return ( links.map((link, index) => <li key={index}><a>Link {link}</a></li> ))
    }

    render() {

        // Масив стилей
        const cls = [classes.Drawer]

        // Добавление стиля : анимация закрывание меню
        if (!this.props.isOpen) cls.push(classes.close)

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {/*Отображение всего списка элементов меню*/}
                        {this.renderLinks()}
                    </ul>
                </nav>
                {/*Отображение затемненного окна при открытом меню*/}
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }
            </React.Fragment>
        )
    }
}

export default Drawer
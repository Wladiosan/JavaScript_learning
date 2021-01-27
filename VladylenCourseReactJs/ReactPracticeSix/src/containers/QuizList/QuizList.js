import React, {Component} from 'react'
import classes from './QuizList.module.css'
import {NavLink} from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import axios from "axios";

export default class QuizList extends Component {

    state = {
        quizes: [],
        loading: true
    }

    renderQuizes() {
        return this.state.quizes.map(quiz => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink
                        to={'/quiz/' + quiz.id}
                    >
                        {quiz.name}
                        {console.log(quiz)}
                    </NavLink>
                </li>
            )
        })
    }

    async componentDidMount() {
        try {
            const responce = await axios.get('https://quiz-27e86-default-rtdb.firebaseio.com/quiz.json')
            const quizes = []
            console.log(responce)
            Object.keys(responce.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест № ${index + 1}`
                })
            })
            this.setState({
                quizes, loading: false
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тесов</h1>
                    {this.state.loading ? <Loader/> : <ul>{this.renderQuizes()}</ul>}
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {

    state = {
        quiz: [
            {
                id: 1,
                question: 'Сколько мне лет?',
                answers: [
                    {text: 'До 18', id: 1},
                    {text: 'От 18 до 25', id: 2},
                    {text: 'От 25 до 35', id: 3},
                    {text: 'После 35', id: 4}
                ],
                rightAnswer: 2
            },
            {
                id: 2,
                question: 'В каком году основали Сант-Петербург?',
                answers: [
                    {text: '1700', id: 1},
                    {text: '1705', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4}
                ],
                rightAnswer: 3
            }
        ],
        activeQuestion: 0,
        answerState: null, // { [id]: 'success', 'error' }
        isFinished: true,
        result: {} // { [id]: 'success', 'error' }
    }

    onAnswerClickHandler = (answerId) => {
        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.result

        // Проверка совпадение правильного ответа с переходом и задержкой на новый вопрос
        if (question.rightAnswer === answerId) {
            console.log('AnswerId ', answerId)
            this.setState({answerState: {[answerId]: 'succes'}})
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({isFinished: true})
                    console.log('Finished is', this.state.isFinished)
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else this.setState({answerState: {[answerId]: 'error'}})

        // Фикс бага двойной клик по правильному ответу, что приводит к переносу второго клика на новый (второй) вопрос
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'succes') {
                return
            }
        }
    }

    // Проверка количества вопросов из всего, return (true or false)
    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz/>
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz
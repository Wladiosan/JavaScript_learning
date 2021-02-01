import {onChangeCounterTwo} from '../actions/actionTypes'

const initialState = {
    counter2: 0
}

export default function counter2(state = initialState, action) {
    switch (action.type) {
        case onChangeCounterTwo :
            return {
                counter2: state.counter2 + action.payload
            }
        default: return state
    }
}
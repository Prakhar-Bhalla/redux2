import {INC_COUNTER, RED_COUNTER} from "./actionType.js"

export const reducer = (state = {Counter : 0}, {type,payload}) => {
    switch(type) {
        case INC_COUNTER : return {...state, Counter : state.Counter + payload}
        case RED_COUNTER : return {...state, Counter : state.Counter - payload}
        default : return state
    }
}
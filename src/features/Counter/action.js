import { INC_COUNTER, RED_COUNTER } from "./actionType.js"


export const incCounter = (data) => ({
    type : INC_COUNTER,
    payload : data
})

export const decCounter = (data) => ({
    type : RED_COUNTER,
    payload : data
})
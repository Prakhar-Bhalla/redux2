import { ADD_TODO, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, REMOVE_TODO } from "./actionType.js"
import { getTodos } from "../../components/Todos.jsx";

export const addTodoLoading = (data) => ({
    type : ADD_TODO_LOADING, 
 });

 export const addTodoSuccess = (data) => ({
    type : ADD_TODO_SUCCESS, 
    payload : data
 });

 export const addTodoError = (data) => ({
    type : ADD_TODO_ERROR, 
    payload : data
 });

 export const getTodoLoading = (data) => ({
    type : GET_TODO_LOADING, 
 });

 export const getTodoSuccess = (data) => ({
    type : GET_TODO_SUCCESS, 
    payload : data
 });

 export const getTodoError = (data) => ({
    type : GET_TODO_ERROR, 
    payload : data
 });

 export const addTodo = (data) => ({
    type : ADD_TODO, 
    payload : data
 });
 
 export const removeTodo = (id) => ({
     type : REMOVE_TODO, 
     payload : id
  });

  export const getData = () => async(dispatch) => {
    try {
        dispatch(getTodoLoading());
        let res = await fetch("http://localhost:3005/todos");
        let data = await res.json();
        dispatch(getTodoSuccess(data));
    } catch(e) {
        dispatch(getTodoError(e));
    }
  }

  export const addData = async(dispatch) => {
    try {
        dispatch(addTodoLoading());
        let res = await fetch("http://localhost:3005/todos", {
            method : "POST",
            body : JSON.stringify({task : "text"}),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        let data = await res.json();
        dispatch(addTodoSuccess(data));
        getTodos();
       } catch(e) {
        dispatch(addTodoError(e));
       }
  }
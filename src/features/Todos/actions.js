import { ADD_TODO, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, CHANGE_STATUS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, REMOVE_TODO } from "./actionType.js"

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

  export const addData = (text) => async(dispatch) => {
    try {
        dispatch(addTodoLoading());
        let res = await fetch("http://localhost:3005/todos", {
            method : "POST",
            body : JSON.stringify({task : text, status : false}),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        let data = await res.json();
        dispatch(addTodoSuccess(data));
        dispatch(getData());
       } catch(e) {
        dispatch(addTodoError(e));
       }
  }

  export const changeStatus = (id) => async(dispatch) => {
   try {
      let res = await fetch(`http://localhost:3005/todos/${id}`, {
          method : "PATCH",
          body : JSON.stringify({status : true}),
          headers : {
              "Content-Type" : "application/json"
          }
      })
      dispatch(getData());
     } catch(e) {
      
     }
  }

  export const deleteTask = (id) => async(dispatch) => {
   try {
      let res = await fetch(`http://localhost:3005/todos/${id}`, {
          method : "DELETE",
          headers : {
              "Content-Type" : "application/json"
          }
      })
      dispatch(getData());
     } catch(e) {
      
     }
  }
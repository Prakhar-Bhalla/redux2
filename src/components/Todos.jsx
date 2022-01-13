import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addData, getData } from "../features/Todos/actions";

export const Todos = () => {
    const [text,setText] = useState("");
    const {loading, todos, error} = useSelector(({todosState}) => {return {...todosState}}, function(prev,curr) {
        if(prev.loading === curr.loading && prev.error === curr.error)
        {
            if(prev.todos.length === curr.todos.length)
            {
                for(let i = 0; i<prev.todos.length; i++)
                {
                    if(prev.todos[i] !== curr.todos[i])
                    {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    });

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const addTodosList = () => {
       dispatch(addData(text));
    }

    useEffect(() => {
        dispatch(getData());
    },[]);

    return loading ? (<div>Loading....</div>) : error ? (<div>Something went wrong!</div>) : (<div style={{marginTop : "20px"}}>
    <input style={{height : "30px", outline : "none", margin : "0 5px", border : "none", borderBottom : "1px crimson solid"}} name="Task" placeholder="Enter task" onChange={handleChange}/>
    <button style={{width : "80px", height : "30px", borderRadius : "15px"}} onClick={addTodosList}>ADD TASK</button>
    {todos.map((el) => {
        return <p key={el.id}>{el.task}</p>
    })}
    </div>)
}
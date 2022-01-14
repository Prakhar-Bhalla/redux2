import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addData, changeStatus, getData, deleteTask } from "../features/Todos/actions";

export const Todos = () => {
    const [text,setText] = useState("");
    const [isUpdated, setIsUpdated] = useState(false);
    const [flag,setFlag] = useState(false);
    const [isComplete, setIsComplete] = useState();
    const [id, setId] = useState();
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
       if(text.length !== 0)
       {
           dispatch(addData(text));
           setText("");
           if(flag)
           {
            setFlag(false);
           }
       }
       else
       {
           if(!flag)
           {
            setFlag(true);
           }
       }
    }

    useEffect(() => {
        dispatch(getData());
    },[]);
    return loading ? (<div>Loading....</div>) : error ? (<div>Something went wrong!</div>) : (<div style={{marginTop : "20px"}}>
    {flag && <p style={{color : "red"}}>Task feild can't be empty</p>} <input style={{height : "30px", outline : "none", margin : "0 5px", border : "none", borderBottom : "1px crimson solid"}} name="Task" placeholder="Enter task" onChange={handleChange}/>
    <button style={{width : "80px", height : "30px", borderRadius : "15px"}} onClick={addTodosList}>ADD TASK</button>
    {todos.map((el) => {
        return <div key={el.id} style={{margin : "10px 0"}}><span>{el.task}</span>
        {!isUpdated ? <button style={{margin : "0 8px", backgroundColor : "cyan", color : "brown", border : "cyan 2px solid", outline : "none", cursor : "pointer"}} onClick={() => {
            setIsUpdated(true)
            setId(el.id);
            setIsComplete(el.status);
        }}>{el.status ? "Completed" : "Pending"}</button> : (<div style={{width : "200px", height : "100px", backgroundColor : "wheat", position : "absolute", left : "42%", top : "100px", display : "flex", alignItems : "center", justifyContent : "center", boxShadow : "10px 10px 10px 4px"}}>{!isComplete && <button onClick={(event) => {dispatch(changeStatus(id)); setIsUpdated(false)}} style={{cursor : "pointer"}}>Done</button>} <button onClick={(event) => {dispatch(deleteTask(id)); setIsUpdated(false)}} style={{cursor : "pointer"}}>Delete</button></div>)}</div>
    })}
    </div>)
}
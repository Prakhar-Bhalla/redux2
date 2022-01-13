import { useSelector, useDispatch } from 'react-redux';
import { incCounter } from '../features/Counter/action';

export const Counter = () => {
    const count = useSelector((state) => {return state.counterState.Counter});
    const dispatch = useDispatch();
    return <div><h3 style={{color : "crimson"}}>Counter : {count}</h3>
    <button onClick={() => {
      dispatch(incCounter(1));
    }}>Add 1</button></div>
}
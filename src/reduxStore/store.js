import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer as TodosReducer } from "../features/Todos/reducer";
import { reducer as CounterReducer} from "../features/Counter/reducer";

const rootReducer = combineReducers({
    counterState : CounterReducer,
    todosState : TodosReducer
});

/*const logger1 = (store) => (next) => (action) => {
    if(typeof action === "function")
    {
        return action(store.dispatch);
    }
    next(action);
}*/

export const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()));
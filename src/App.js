import logo from './logo.svg';
import './App.css';
import { Todos } from './components/Todos';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
      <hr/>
      <Todos/>
    </div>
  );
}

export default App;

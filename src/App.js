import TodoList from './TodoList'
import './App.css';
import { Link, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>React Redux Todo</h1>
    <h2>A simple Todo List Built with React and Redux</h2>
      <p>
        <Link to="/todos">See My Todo</Link>
      </p>
      <p>
        <Link to="/todos/new">Add a Todo</Link>
      </p>
      <Route path="/todos" component={TodoList} />
      <Route exact path="/" render={()=> <Redirect to="/todos" />} />
    </div>
  );
}

export default App;

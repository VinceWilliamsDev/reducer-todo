import React, {useReducer} from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'
import { initialState, reducer } from './reducers/reducers'


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoList state={state} dispatch={dispatch} />
      <TodoForm dispatch={dispatch} />
    </div>
  );
}

export default App;
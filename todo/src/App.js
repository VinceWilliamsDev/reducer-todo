import React, {useReducer} from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'
import { initialState, reducer } from './reducers/reducers'


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  // const updateTodo = taskName => {

  //   const newTask = {
  //       task: `${taskName}`,
  //       id: Date.now(),
  //       completed: false
  //   }

  //   setTodoList([...todoList, newTask ])
  // }

  // const clearCompleted = () => {
  //   //function to clear completed tasks
  //   setTodoList({
  //       todo: todoList.todo.filter(item => !item.completed)
  //   })
  // }

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoList state={state} dispatch={dispatch} />
      <TodoForm dispatch={dispatch} />
    </div>
  );
}

export default App;
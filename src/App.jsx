import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import TodoContext from './context/TodoContext'
import TodoReducers from './reducers/TodoReducers'

function App() {

 const[todos,dispatch]=useReducer(TodoReducers,[])

  useEffect(()=>{
    console.log(todos);
  })

  return (
    <>
     <TodoContext.Provider value={{todos,dispatch}}>
        <AddTodo />
        <TodoList/>
     </TodoContext.Provider>
    </>
  )
}

export default App;

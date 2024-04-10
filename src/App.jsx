import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoList from './components/TodoList/TodoList'

function App() {
  const todos=[
    {id:1 ,text:"todo 1" , isfinshed:true},
    {id:2 ,text:"todo 2" , isfinshed:true},
    {id:3 ,text:"todo 3" , isfinshed:true},
    {id:4 ,text:"todo 4" , isfinshed:true}
  ]
 
  return (
    <>
     <TodoList todos={todos}/>
    </>
  )
}

export default App;

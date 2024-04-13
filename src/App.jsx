import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import TodoContext from './context/TodoContext'

function App() {
  const[todos,setTodos]= useState([
    {id:1 ,text:"todo 1" , isfinshed:true},
    {id:2 ,text:"todo 2" , isfinshed:true},
    {id:3 ,text:"todo 3" , isfinshed:true},
    {id:4 ,text:"todo 4" , isfinshed:true}
  ]
);


  useEffect(()=>{
    console.log(todos);
  })

  return (
    <>
     <TodoContext.Provider value={{todos,setTodos}}>
        <AddTodo />
        <TodoList/>
     </TodoContext.Provider>
    </>
  )
}

export default App;

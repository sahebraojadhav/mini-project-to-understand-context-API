import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'

function App() {
  const[todos,setTodos]= useState([
    {id:1 ,text:"todo 1" , isfinshed:true},
    {id:2 ,text:"todo 2" , isfinshed:true},
    {id:3 ,text:"todo 3" , isfinshed:true},
    {id:4 ,text:"todo 4" , isfinshed:true}
  ]
);

  function addTodos(todoText){
    let nextId=todos.length+1;
    setTodos([...todos,{id:nextId,isFinished:false , text:todoText}])
  }

  return (
    <>
    <AddTodo addTodos={addTodos} />
     <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App;

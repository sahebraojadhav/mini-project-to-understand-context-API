import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo(){

    const {todos,dispatch}=useContext(TodoContext);
    const [todoText,setTodoText]=useState('');

    function addTodos(todoText){
        let nextId=todos.length+1;
        dispatch({type:'add_todo',payload:{todoText}})
    }

    return(
        <>
            <input 
                placeholder="Add your next todo..." 
                onChange={(e)=>setTodoText(e.target.value)}
                value={todoText}
            />
            <button onClick={()=>{
                let nextId=todos.length+1;
                setTodos([...todos,{id:nextId,text:todoText,isFinished:false}])
                setTodoText('')}}>Submit</button>
        </>
    )
}

export default AddTodo;

//<AddTodo addTodos={addTodos} />
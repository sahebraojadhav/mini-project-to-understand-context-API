import Todo from "../Todo/Todo";
function TodoList({ Todos }) {
    return (
    
            Todos && Todos.map((todo) => 
            <Todo 
                key={todo.id} 
                 text={todo.text}
                isFinished={todo.isFinished} 
             
             />)
      
    );
}

export default TodoList;
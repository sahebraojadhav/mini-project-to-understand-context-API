function Todo({text , isFinished}){
    return(
        <>
            <input type="checkbox" checked={isFinished}/>
            <span>{text}</span>
            <button>Edit</button>
            <button>Delete</button>
        </>
    )
}

export default Todo; 
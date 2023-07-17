import '../css/CreateTodoButton.css';
function CreateTodoButton() {
    return (
        <button className="CreateTodoButton" onClick={crearTodo}>+</button>
    )
}


function crearTodo(){
    console.log("Le diste Click");
}

export {CreateTodoButton};
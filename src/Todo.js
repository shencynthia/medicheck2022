import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoCLick(){
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label> 
            <input class="myTodoListCheckbox" type="checkbox" checked={todo.complete} onChange={handleTodoCLick}></input>
            {todo.name}
            </label>
        </div>
    )
}
import React, { useContext, useState } from 'react'
import {TodoContext} from '../TodoContext'
import '../css/TodoForm.css'
function TodoForm() {
    const {addTodo,setOpenModal} = useContext(TodoContext);
    const [newTodoValue,setNewTodoValue] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    function onCancel() {
        setOpenModal(false);
    }


    function onChange(e) {
        setNewTodoValue(e.target.value);
    }

  return (
    <form onSubmit={onSubmit}>
        <label htmlFor="">Esvribe tu nuevo TODO</label>
        <textarea placeholder='Cortar cebolla para el arlmuerzo' value={newTodoValue} onChange={onChange} ></textarea>
        <div className="todoForm-buttonContainer">
            <button type='submit' onClick={onCancel} className='todoForm-button todoForm-button--cancel'>Cancelar</button>
            <button type='submit' className='todoForm-button todoForm-button--add'>Añadir</button>
        </div>
    </form>
  )
}

export {TodoForm}
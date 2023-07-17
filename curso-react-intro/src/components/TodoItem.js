import '../css/TodoItem.css'
import {AiOutlineCheck,AiOutlineClose } from 'react-icons/ai'
function TodoItem({texto,completed,onComplete,onDelete}) {

  function  eliminarTodo(e) {
    console.log(e)
  }
    return (
      <li className="TodoItem">
        <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} id={texto} onClick={onComplete}><AiOutlineCheck /></span>
        <p className={`TodoItem-p ${completed ? 'TodoItem-p--complete' : ''}`}>{texto}</p>
        <span className="Icon Icon-delete" onClick={onDelete}><AiOutlineClose /></span>
      </li>
    );
  }

  export {TodoItem}
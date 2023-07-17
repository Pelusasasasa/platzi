
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';
import { TodosLoading } from './components/TodosLoading';
import { TodosError } from './components/TodosError';
import { EmptyTodos } from './components/EmptyTodos';
import {TodoContext} from './TodoContext/index';
import { useContext} from 'react';
import { Modal } from './Modal';

function App() {
const {loading,error,searchedTodos,todos,deleteTodo,completeTodo,openModal,setOpenModal} = useContext(TodoContext)
  return (
    <>
      <TodoCounter/>
        <TodoSearch/>
        <TodoList>
          {loading && <TodosLoading/>}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
    
          {searchedTodos.map(todo =>
            <TodoItem todos={todos} onDelete={() => deleteTodo(todo.text)} onComplete={() => completeTodo(todo.text)} key={todo.text} texto={todo.text} completed={todo.completed}/>)
          }
        </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />
      { openModal && (
        <Modal>
          Crear Todos
        </Modal>
      )}
    </>
  );
}



export default App;

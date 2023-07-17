
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';
import { TodosLoading } from './components/TodosLoading';
import { TodosError } from './components/TodosError';
import { useState,useEffect } from 'react';
import {useLocalStorage} from './hooks/useLocalStorage';
import { EmptyTodos } from './components/EmptyTodos';

function App() {

  const {item:todos,saveItem:saveTodos,loading,error} = useLocalStorage('TODOS_V1',[]);

  const [searchValue,setSearchValue] = useState('');

  const completedTodos = todos.filter(todo=>todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => todo.text.toUpperCase().includes(searchValue.toUpperCase()));

  function completeTodo(text) {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  
  function deleteTodo(text) {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  };

  return (

    <>
      <TodoCounter  total={totalTodos} completed={completedTodos}  />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <TodosLoading/>}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

        {searchedTodos.map(todo =>
           <TodoItem todos={todos} onDelete={() => deleteTodo(todo.text)} onComplete={() => completeTodo(todo.text)} key={todo.text} texto={todo.text} completed={todo.completed}/>)
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );
}



export default App;

import { createContext, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider({children}) {
    const {item:todos,saveItem:saveTodos,loading,error} = useLocalStorage('TODOS_V1',[]);

    const [searchValue,setSearchValue] = useState('');

    const [openModal,setOpenModal] = useState(false);

    const completedTodos = todos.filter(todo=>todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(todo => todo.text.toUpperCase().includes(searchValue.toUpperCase()));

    function addTodo(text) {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed:false
        });
        saveTodos(newTodos);
    }

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

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoProvider,TodoContext}

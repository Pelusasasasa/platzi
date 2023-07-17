
import { useContext } from 'react';
import '../css/TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch(){
    const {searchValue,setSearchValue} = useContext(TodoContext)    

    function buscar(e) {
        setSearchValue(e.target.value)
    }

    return(
        <div className="input">
            <input onChange={buscar} value={searchValue} type="text" placeholder = "Cortar Cebolla" />
        </div>
    )
}



export {TodoSearch};
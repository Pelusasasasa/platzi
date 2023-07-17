import {useState} from 'react';
import '../css/TodoSearch.css';

function TodoSearch({searchValue,setSearchValue}){
    

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
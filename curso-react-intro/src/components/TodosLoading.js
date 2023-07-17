import React from 'react';
import '../css/TodosLoading.css';

function TodosLoading() {
  return (
    <div className="cargando">
        <div className="spinner"></div>
        <p>Cargando...</p>
    </div>
  )
}

export {TodosLoading}
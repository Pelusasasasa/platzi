import react from 'react';
import reactDom from 'react-dom';
import './css/Modal.css';

function Modal({children}){
    return reactDom.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    )
};

export {Modal}
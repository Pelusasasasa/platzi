import react from 'react';
import reactDom from 'react-dom';

function Modal({children}){
    return reactDom.createPortal(
        <div className='Modal'>
            {children}
        </div>,
        document.getElementById('modal')
    )
};

export {Modal}
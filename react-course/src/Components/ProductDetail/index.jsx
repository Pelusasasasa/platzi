import { useContext } from 'react';
import './style.css';
import {XMarkIcon} from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

function ProductDetail() {
  const {isProductoDetailOpen,closeProductDetail,productToShow} = useContext(ShoppingCartContext);
  return (
    <aside className={`product-detail  flex-col fixed bg-white right-0 border border-black rounded-lg ${isProductoDetailOpen ? 'flex' : 'hidden' }`}>
        <div className='flex justify-between p-6  items-center '>
            <h2 className='font-medium text-xl'>{productToShow.title}</h2>
            <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={closeProductDetail}></XMarkIcon>
        </div>
        <figure className='px-6'>
          <img className='w-full h-full rounded-lg' src={productToShow.images[0]} alt={productToShow.title} />
        </figure>
        <p className='flex flex-col p-6'>
          <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
          <span className='font-medium text-2xl'>{productToShow.title}</span>
          <span className=''>{productToShow.description}</span>
        </p>
    </aside>
  )
}

export default ProductDetail
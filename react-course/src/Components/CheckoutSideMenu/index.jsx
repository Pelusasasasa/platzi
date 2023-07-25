import { useContext } from 'react';
import {XMarkIcon} from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard/Index';

import { totalPrice } from '../../utils';

import './style.css';
import { Link } from 'react-router-dom';


function CheckoutSideMenu() {
  const {count,setCount,cartProducts,setCartProducts,isCheckoutSideMenuOpen,closeCheckoutSideMenu,order,setOrder} = useContext(ShoppingCartContext);

  function handleDelete(id) {
    const filteredProducts = cartProducts.filter(elem => elem.id !== id);
    setCartProducts(filteredProducts);
    setCount(count - 1)
  }

  function handleCheckout() {
    const orderToAdd = {
      date:'01/02/2023',
      products:cartProducts,
      totalProducts:cartProducts.length,
      totalPrice:totalPrice(cartProducts)
    };
    setOrder([...order,orderToAdd]);
    setCount(0);
    closeCheckoutSideMenu();
    setCartProducts([]);
  }


  return (
    <aside className={`checkout-side-menu  flex-col fixed bg-white right-0 border border-black rounded-lg ${isCheckoutSideMenuOpen ? 'flex' : 'hidden' }`}>
        <div className='flex justify-between p-6 bg-orange-300 items-center '>
            <h2 className='font-medium text-xl'>My Order</h2>
            <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={closeCheckoutSideMenu}></XMarkIcon>
        </div>
      <div className='px-6 overflow-y-scroll flex-1'>
      {
        cartProducts.map(product=>(
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageURL={product.images[0]}
            handleDelete={handleDelete}
          />
          ))
      }
      </div>
      <div className='px-6  bg-orange-300 pt-4 pb-4'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className='w-full bg-black py-3 text-white rounded-lg' onClick={()=>handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
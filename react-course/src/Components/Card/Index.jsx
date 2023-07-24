import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import {PlusIcon,CheckIcon} from '@heroicons/react/24/solid';


const Card = ({data}) => {
  const {category,images,title,price} = data;

  const {count,setCount,openProductDetail,setproductToShow,cartProducts,setCartProducts,openCheckoutSideMenu,closeProductDetail,isProductoDetailOpen} = useContext(ShoppingCartContext)

  function showProduct() {
    openProductDetail();
    setproductToShow(data);
  }

  function addProductToCart(event,ProductData) {
    event.stopPropagation();
    setCount(count + 1);
    setCartProducts([...cartProducts,ProductData]);
    openCheckoutSideMenu();
    closeProductDetail();
  };

  function renderIcon(id){
    const isInCart = cartProducts.filter(elem => elem.id === id).length > 0;

    if (isInCart) {
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
          <CheckIcon className="h-6 w-6 text-black"></CheckIcon>
        </div>
      )
    }else{
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1' onClick={(event) => addProductToCart(event,data)}>
          <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
        </div>
      )
    }
    
  }

  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={showProduct}>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category.name}</span>
            <img src={images[0]} alt={title} className='w-full h-full object-cover rounded-lg' />
            {renderIcon(data.id)}
        </figure>
        <p className='flex justify-between'>
            <span className='font-light text-sm'>{title}</span>
            <span className='font-lg font-medium'>${price}</span>
        </p>
    </div>
  )
}

export default Card
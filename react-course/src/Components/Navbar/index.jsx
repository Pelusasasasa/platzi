import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context";
import {ShoppingBagIcon} from '@heroicons/react/24/solid';

const Navbar = () => {

  const {count,setSearchByCategory} = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4'
  
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
        <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg"><NavLink to='/'>Shopi</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/' onClick={()=>setSearchByCategory('')}>All</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/clothes' onClick={()=>setSearchByCategory('clothes')}>Clothes</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/electronics' onClick={()=>setSearchByCategory('electronics')}>Electronics</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/furnitures' onClick={()=>setSearchByCategory('furnitures')}>Furnitures</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/toys' onClick={()=>setSearchByCategory('toys')}>Toys</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/others' onClick={()=>setSearchByCategory('others')}>Others</NavLink></li>
        </ul>
        <ul className="flex items-center gap-3">
            <li className="text-black/60 ">teff@platzi.com</li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/my-orders'>MyOrders</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/my-account'>MyAccount</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/sing-in'>SingIn</NavLink></li>
            <li className="flex aling-center justify-center ">
              <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
              <div>{count}</div>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
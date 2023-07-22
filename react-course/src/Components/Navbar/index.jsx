import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {

  const {count} = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4'
  
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
        <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg"><NavLink to='/'>Shopi</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/'>All</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/clothes'>Clothes</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/electronics'>Electronics</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/furnitures'>Furnitures</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/toys'>Toys</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/others'>Others</NavLink></li>
        </ul>
        <ul className="flex items-center gap-3">
            <li className="text-black/60 ">teff@platzi.com</li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/my-orders'>MyOrders</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/my-account'>MyAccount</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? activeStyle : undefined} to='/sing-in'>SingIn</NavLink></li>
            <li>Carrito {count}</li>
        </ul>
    </nav>
  )
}

export default Navbar
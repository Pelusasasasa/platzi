import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) =>{
    const [count,setCount] = useState(0);//
    const [productToShow,setproductToShow] = useState({
        images:[],
        title:"",
        price:0,
    });//
    const [cartProducts,setCartProducts] = useState([]);

    //Product Detail Open/Close
    const [isProductoDetailOpen,setIsProductoDetailOpen] = useState(false);//
    function openProductDetail() {setIsProductoDetailOpen(true);}
    function closeProductDetail() {setIsProductoDetailOpen(false);}

    //Ckeckout Side Menu Open/Close
    const [isCheckoutSideMenuOpen,setIsCheckoutSideMenuOpen] = useState(false);
    function openCheckoutSideMenu() {setIsCheckoutSideMenuOpen(true);}
    function closeCheckoutSideMenu() {setIsCheckoutSideMenuOpen(false);}

    //Shopping Cart Order
    const [order,setOrder] = useState([]);

    return (
        <ShoppingCartContext.Provider value={{
            count,setCount,
            isProductoDetailOpen,openProductDetail,closeProductDetail,
            isCheckoutSideMenuOpen,openCheckoutSideMenu,closeCheckoutSideMenu,
            productToShow,setproductToShow,
            cartProducts,setCartProducts,
            order,setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
import { createContext, useState, useEffect } from 'react';

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

    //get products
    const [items,setItems] = useState([]);
    const [filterItems,setFilterItems] = useState([]);
    
    //SearByTitle
    const [searchByTitle,setSearchByTitle] = useState('');


    function filteredItemsByTitle(items,searchByTitle) {
        return items?.filter(item => item.title.toUpperCase().includes(searchByTitle.toUpperCase()));
    };

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
        .then(response => response.json())
        .then(data => setItems(data))
      },[]);
    

    useEffect(()=>{
        if (searchByTitle) {
            setFilterItems(filteredItemsByTitle(items,searchByTitle));
        }
      },[items,searchByTitle]);

    return (
        <ShoppingCartContext.Provider value={{
            count,setCount,
            isProductoDetailOpen,openProductDetail,closeProductDetail,
            isCheckoutSideMenuOpen,openCheckoutSideMenu,closeCheckoutSideMenu,
            productToShow,setproductToShow,
            cartProducts,setCartProducts,
            order,setOrder,
            items,setItems,
            searchByTitle,setSearchByTitle,
            filterItems,setFilterItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
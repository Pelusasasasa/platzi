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
    const [searchByCategory,setSearchByCategory] = useState('');

    function filteredItemsByTitle(items,searchByTitle) {
        return items?.filter(item => item.title.toUpperCase().includes(searchByTitle.toUpperCase()));
    };

    function filterBy(searchType,items,searchByTitle,searchByCategory) {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items,searchByTitle);
        }else if(searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items,searchByCategory)
        }else if(searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items,searchByCategory).filter(item => item.title.toUpperCase().includes(searchByTitle.toUpperCase()));
        }else{
            return items;
        }
    }

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=50')
        .then(response => response.json())
        .then(data => setItems(data))
      },[]);


    useEffect(()=>{
        if (searchByTitle && searchByCategory) setFilterItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchByTitle,searchByCategory))
        if (searchByTitle && !searchByCategory) setFilterItems(filterBy('BY_TITLE',items,searchByTitle,searchByCategory))
        if (searchByCategory && !searchByTitle) setFilterItems(filterBy('BY_CATEGORY',items,searchByTitle,searchByCategory))
        if (!searchByCategory && !searchByTitle) setFilterItems(filterBy(null,items,searchByTitle,searchByCategory))
    },[items,searchByTitle,searchByCategory]);


    function filteredItemsByCategory(items,searchByCategory) {
       return items?.filter(item => item.category.name.toUpperCase().includes(searchByCategory.toUpperCase()));
    };


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
            filterItems,setFilterItems,
            searchByCategory,setSearchByCategory,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
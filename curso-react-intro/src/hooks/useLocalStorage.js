import { useState,useEffect } from "react";

function useLocalStorage(itemName,initialValue) {
    const [item,setItem] = useState(initialValue);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    console.log("a")

    useEffect(() => {
        setTimeout(() => {
          try {
            const parseItems = JSON.parse(localStorage.getItem(itemName));
          
            if (!parseItems) {
                localStorage.setItem(itemName,JSON.stringify(initialValue));
                parseItems = initialValue;
                setLoading(false)
            }else{
              setItem(parseItems)
            };
            setLoading(false)
          } catch (error) {
            console.log(error)
            setError(true);
            setLoading(false);
          }
        }, 2000);
    }, []);
  

    const saveItem = (newItem)=>{
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return {
        item,
        saveItem,
        loading,
        error
    };
  };


export {useLocalStorage}
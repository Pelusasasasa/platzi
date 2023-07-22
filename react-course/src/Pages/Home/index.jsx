import { useEffect, useState } from "react";
import Layout from "../../Components/layout";
import Card from "../../Components/Card/Index";
import ProductDetail from "../../Components/ProductDetail";


const Home = () => {
  const [items,setItems] = useState([]);

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
    .then(response => response.json())
    .then(data => setItems(data))
  },[]);

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map((item)=> <Card key={item.id} data={item}/>)
        }
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home
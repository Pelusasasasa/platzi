import { useContext } from "react";
import Layout from "../../Components/layout";
import Card from "../../Components/Card/Index";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";


const Home = () => {
  const {items,setSearchByTitle,searchByTitle,filterItems,setFilterItems} = useContext(ShoppingCartContext);
  function renderView(){
    if (searchByTitle.length > 0) {
      return (
        filterItems?.map((item)=> <Card key={item.id} data={item}/>)
      )
    }else{
      return (
          items?.map((item)=> <Card key={item.id} data={item}/>)
      )
    }
  }
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input type="text" placeholder="Search a product" className="rounded-lg p-4 border-black border w-80 mb-3 focus:outline-none" onChange={(e) => setSearchByTitle(e.target.value)}/>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home
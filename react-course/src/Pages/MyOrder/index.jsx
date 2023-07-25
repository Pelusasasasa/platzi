import { useContext } from "react"
import Layout from "../../Components/layout"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard/Index";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const {order} = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') index = order?.length -1;
  
    return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-5">
          <Link to='/my-orders' className="absolute left-0">
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
          </Link>
          <h1>My Order</h1>
        </div>
      <div className=''>
      {
        order?.[index]?.products.map(product=>(
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageURL={product.images[0]}
          />
          ))
      }
      </div>
    </Layout>
    )
  }
  
  export default MyOrder
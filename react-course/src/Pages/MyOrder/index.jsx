import { useContext } from "react"
import Layout from "../../Components/layout"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard/Index";

const MyOrder = () => {
  const {order} = useContext(ShoppingCartContext);

    return (
      <Layout>
      MyOrder
      <div className=''>
      {
        (order?.slice(-1))[0].products.map(product=>(
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
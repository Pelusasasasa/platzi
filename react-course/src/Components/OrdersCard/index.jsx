
const OrdersCard = (data) => {
    const {totalPrice,totalProducts} = data;
  return (
    <div className='flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-4'>
        <p className='flex justify-between w-full'>
            <div className="flex flex-col ">
              <span className="font-light">01/02/2023</span>
              <span className="font-light">{totalProducts.toFixed(2)} Articles</span>
            </div>
            <span className="font-medium text-2xl">${totalPrice}</span>
        </p>
        <p>

        </p>
    </div>
  ) 
}

export default OrdersCard
import './style.css';
import {XMarkIcon} from '@heroicons/react/24/solid'

function ProductDetail() {
  return (
    <aside className='product-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg'>
        <div className='flex justify-between p-6  items-center '>
            <h2 className='font-medium text-xl'>Detail</h2>
            <XMarkIcon className='lassName="h-6 w-6 text-blue-500"'></XMarkIcon>
        </div>

    </aside>
  )
}

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>


export default ProductDetail
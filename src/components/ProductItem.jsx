import React from 'react'

function ProductItem({product, onSetQty, onIncrement, onDecrement, onRemove}) {
  return (
    <div className='flex mt-4 p-2 rounded-2xl bg-gray-50'>
        <div className='flex-1'>
            <h2 className='font-semibold'>{product.name}</h2>
            <p className='text-gray-500'>${product.price}</p>
        </div>

        <div className='flex gap-3 items-center'>
            <button 
                className='bg-red-300 px-4 py-2 rounded cursor-pointer'
                onClick={() => onDecrement(product.id)}
            >
                -
            </button>
            <input
                type="number"
                onChange={e=>onSetQty(product.id, e.target.value)}
                value={product.qty}
                className="w-16 text-center border rounded px-4 py-2 outline-blue-400"
                 />
            <button 
                className='bg-green-300 px-4 py-2 rounded cursor-pointer'
                onClick={() => onIncrement(product.id)}
            >
                +
            </button>
            <button 
                className='text-red-500 hover:underline cursor-pointer'
                onClick={()=>onRemove(product.id)}
            >
                Remove
            </button>

        </div>
    </div>
    
    
  )
}

export default ProductItem


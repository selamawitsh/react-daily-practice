import React from 'react'

function CartSummary({totalItem, totalPrice,onClear}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow sticky top-6 mt-2">
      <h1 className='font-bold text-2xl'>Cart Summary</h1>
      <p className='text-gray-500'>{totalItem} item(s)</p>
      <p className='font-semibold text-2xl'>${totalPrice}</p>
      <div className="space-y-2">
        <div className='bg-yellow-100 p-2 rounded text-center cursor-pointer font-semibold hover:bg-amber-200' onClick={onClear}>Clear Cart</div>
      <div className='bg-blue-400 p-2 rounded text-center text-white cursor-pointer font-semibold hover:bg-blue-500' onClick={() => alert('Checkout clicked!')}>Checkout</div>
      </div>
      
    </div>
    
  )
}

export default CartSummary

import React, { useState } from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart();
    if (isEmpty) return <h1 className='text-center '>Your Cart Is Empty</h1>
  return (
    <div>
      
    </div>
  )
}

export default Cart

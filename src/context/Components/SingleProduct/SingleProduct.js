import React from 'react'
import './SingleProduct.css'
function SingleProduct() {
  return (
    <div className='singleProductContainer'>
      <div className='singleProductImage'>
        <img src='https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='placeholder' />
      </div>
      <div className='singleProductDescription'>
        <h3>Fresho Farm Eggs - Regular, Medium,<br/>Antibiotic Residue-Free, 6 pcs</h3>
        <span><p>Rs.500</p></span>
      </div>
    </div>
  )
}

export default SingleProduct
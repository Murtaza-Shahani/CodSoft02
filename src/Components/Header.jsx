import React from 'react'
import '../App.css'

const Header = ({count, handleShow}) => {
  
  return (
   <>
   <div className='flex shopping-cart'>
  <div onClick={()=>handleShow(false)}>  Ecommerce Shopping Cart app  </div >
  <div onClick={()=>handleShow(true)}> Cart 
    <span>{count}</span>
  </div>
    </div>
    </>
  )
}

export default Header

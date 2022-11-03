import React from 'react'
import { Button} from 'react-bootstrap';
import {useCart} from 'react-use-cart'

export default function Cart() {

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

if(isEmpty) return <div className="text-center lead display-6 py-5">Cart is Empty </div>
  return (
    <div className='container-fluid py-3'>
    <div className="row justify-content-center">
        <h4 className="text-center py-3 text-decoration-underline">My Cart</h4>
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
            <div className="d-flex justify-content-center py-3">
                <p className='position-relative fw-bolder text-title'>Cart <span className="postition-absolute translate-middle rounded-pill badge bg-danger mx-1">{totalUniqueItems}</span></p>
                <p className='fw-bolder text-title'>Total Items <span className="postition-absolute translate-middle rounded-pill badge bg-success mx-1">{totalItems}</span></p>
            </div>
        <table className='table table-light table-hover m-0'>
          <tbody>
            {items.map((item, index) =>{
              return(
                <tr key={index} className='align-middle '>
                  <td> 
                    <img src={item.img} className='img-cart'alt={item.title}/>
                  </td>
                  <td>{item.title}</td>
                  <td> ${item.price}</td>
                  <td> Quantity: {item.quantity}</td>
                  <td> 
                    <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}variant="outline-dark ms-1">-</Button>  
                    <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}variant="outline-dark ms-1">+</Button> 
                    <Button onClick={()=> removeItem(item.id)}variant="outline-danger ms-5">Remove Item</Button>     
                 </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between py-3">
        <Button onClick={() => emptyCart()} variant="outline-danger">Clear All</Button>
          <h3>Total Price: {cartTotal}</h3>
      </div>
      </div>
            </div>
       
  )
}

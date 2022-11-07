import React from 'react'
import { Button} from 'react-bootstrap';
import {useCart} from 'react-use-cart';


export default function Cards(props) {
  const {addItem} = useCart();
  const{title, description, img, price, item} = props
 

  
  return (
    <>
  

<div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
<div className='card h-70 shadow rounded'>
   
<img src={img} alt='bio soap' className='card-img-top img-fluid imgSoap'/>
<div className='card-body'>
  <div className='d-flex justify-content-between '>
<h3 className='card-title lead' >{title}</h3>
<span className='fw-bolder'>{'$'+ price}</span>
</div>

<div className=''>
<p className='card-text lead'>{description}</p>
</div>
<div className='d-grid justify-content-end mt-4'>
<Button 
onClick={() => {addItem(item)}}
variant="outline-success "
 size="sm">
  Add to cart
  </Button>
</div>
</div>
</div>
  </div>
 



    </>
  )
}



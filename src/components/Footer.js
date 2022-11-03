import React from 'react'

export default function Footer() {
  return (
   <div className="main-footer bg-dark text-light" > 
        <div className="container"> 
            <div className='row'> 
              <div className='col-md-3 col-sm-6'> 
              <h4>Contact Us</h4>
                <ul className="list-unstyled"> 
                    <li><strong>Address: </strong></li>       
                    <li>1111 New York</li> 
                    <li>Tel:</li>
                    <li>900- 900- 9000</li>         
                </ul>
            </div>     
              <div className='col-md-3 col-sm-6'> 
              <h4>Office hours </h4>
                <ul className="list-unstyled"> 
                    <li>Mon: 9:30am - 2:30 pm</li>       
                    <li>Tues - Sat: 9:30am - 6:30pm</li> 
                    <li>Closed on Sundays and Public Holidays</li>         
                </ul>
            </div>   
              <div className='col-md-3 col-sm-6'> 
              <h4>Customer Service </h4>
                <ul className="list-unstyled"> 
                    <li>Privacy Policy</li>       
                    <li>Terms of Service</li>     
                    <li>FAQs</li>     
                </ul>
            </div>    
            </div>
            <div className="footer-bottom">
                <p className="text-start my-2"> 
                    &copy; {new Date().getFullYear()} Diane Compaore - All rights reserved.                
                </p>
            </div>
        </div>
   </div>
  )
}

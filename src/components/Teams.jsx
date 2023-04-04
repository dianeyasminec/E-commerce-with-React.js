import React from 'react'
import imgFive from '../backend/images/making.jpg'

export default function Teams() {
  return (
    <div className="container">
      <h3 className="lead text-center m-5 display-4 underline">From Our Teams :</h3>
      
       <p className="lead m-3">
    Dear clients we're proud to introduce you to our <strong>fragrance-free, cruelty free  and no paraben products</strong>! Our
     African Soap are made in Burkina Faso with a natural remedy for all skin types.
     Our all-natural African soaps will help with a variety of skin problems such as acne,
    psoriasis, and dermatitis. Highly recommend pairing our African Soaps with Garner's
    Garden Moisturizing Body Oil and our Normalizing Face Oil in order to reduce the 
    likelihood of dryness of the skin and to receive the maximum benefit of our African 
     Soap.
    Ingredients: Honey, shea butter, osun (camwood), palm kernel oil, cocoa pod ash, palm bunch ash, aloe vera, lime juice, and water.
    (Note: When exposed to air it can develop a thin white-colored film, remove the white film by running it in water)
    <img 
      className="img-fluid rounded mx-auto d-block py-5"
      src={imgFive} alt='display of soap making on table'/>
    </p>
    <blockquote className="blockquote text-light">
               <p className="mb-0">
                Beauty is not just skin deep. It starts with how we nourish ourselves, both inside and out
                </p>
            </blockquote>
    </div>
  )
}


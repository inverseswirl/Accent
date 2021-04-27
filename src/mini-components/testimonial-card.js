import React from 'react';
import {FaQuoteRight} from 'react-icons/fa';


const TestimonialCard =({src,name,comment})=>{

    return(
     
       
           <div className="tcard">
             
                    <img  alt="testimonial" className="tcard-pic"src={src} />
            
                    <h3 className="tcard-name">{name} </h3>  
                    <span className="tcard-quote"><FaQuoteRight/></span>
                    <p className="tcard-comment"> {comment} </p>
            </div>
  
                                 

       
    )
}
export default TestimonialCard;
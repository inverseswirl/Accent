import React from 'react';
import {FaQuoteRight} from 'react-icons/fa';
import Testimonials from '../components/testimonials';


const TestimonialCard =({src,name,comment})=>{

    return(
        <div className="testimonials-bg" id="testimonials">
           <div className="card1">
                    <img className="card1-pic"src={src} width={100} height={90}/>
                    <h3 className="card1-name">{name} </h3>  
                    <span className="card1-quote"><FaQuoteRight/></span>
                    <p className="card1-comment"> {comment} </p>
                    
                                 
                 </div>

          </div>
    )
}
export default TestimonialCard;
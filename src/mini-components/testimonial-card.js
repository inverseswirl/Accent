import React from 'react';
import {FaQuoteRight} from 'react-icons/fa';
import Testimonials from '../components/testimonials';


const TestimonialCard =({src,name,comment})=>{

    return(
   
       
           <div className="card">
                    <img className="card-pic"src={src} width={100} height={90}/>
                    <h3 className="card-name">{name} </h3>  
                    <span className="card-quote"><FaQuoteRight/></span>
                    <p className="card-comment"> {comment} </p>
            </div>
  
                                 

       
    )
}
export default TestimonialCard;
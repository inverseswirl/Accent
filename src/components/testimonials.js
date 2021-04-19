import React from 'react';
import {FaQuoteRight} from 'react-icons/fa';
import TestimonialCard from '../mini-components/testimonial-card';

const Testimonials=()=>{

    const customer=[];
    return(

        <div className="testimonials-bg" id="testimonials">

       
           <div className="scroll-buttons">
           <button className="left-btn"></button>
           <button className="right-btn"></button>
            </div>
             
             
          
           
                
                <TestimonialCard
                src="https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                name="Ms.Rose"
                comment="My communication has improved so much after using Accent's Platinum package. I would definitely recommend all to try their services."
                />
                {/* <TestimonialCard
                src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                name="Ms.Jess"
                comment="The basic package helped me improve my presentation skills.Thanks to accent's coaches for helping me out."/> */}
        
    



        </div>
                 
                
            


    


    
    )
}

export default Testimonials;
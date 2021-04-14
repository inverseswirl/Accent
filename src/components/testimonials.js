import React from 'react';
import {FaQuoteRight} from 'react-icons/fa';

const Testimonials=()=>{

    const customer=[];
    return(

        <div className="testimonials-bg" id="testimonials">

       
           <div className="scroll-buttons">
              <button className="left-btn"></button>
              <button className="right-btn"></button>
            </div>
          
    
            <div className="testimonials-wrapper">
                <div className="card1">
                    <img className="card1-pic"src="https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width={100} height={90}/>
                    <h3 className="card1-name"></h3>  
                    <span className="card1-quote"><FaQuoteRight/>hello</span>
                    <p className="card1-comment"> My communication has improved so much after using Accent's Platinum package. I would definitely recommend all to try their services. </p>
                    
                                 
                 </div>

                
                  {/* <div className="card2">
                      <img className="card2-pic" src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" width={70} height={65}/>
                      <p className="card2-comment">" The basic package helped me improve my presentation skills.<br/>Thanks to accent's coaches for helping me out. "</p>
                      <span className="line"></span>
                      <h3  className="card2-name">Ms. Jess</h3>    
                  </div> */}
              </div>
                
                


    


    
        </div>
    )
}

export default Testimonials;
import React from 'react';
import {IoIosArrowBack,IoIosArrowForward} from'react-icons/io';
import {GrRestroomWomen} from 'react-icons/gr';


const Testimonials=()=>{

    return(

        <div className="testimonials-bg" id="testimonials">

       
           <div className="scroll-buttons">
              <button className="left-btn"></button>
              <button className="right-btn"></button>
            </div>
          
    
            <div className="testimonials-wrapper">
                <div className="card1">
                    <img className="card1-pic"src="https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width={70} height={65}/>
                    <p className="card1-comment">" My communication has improved so much after using Accent's Platinum package. <br/>I definitely recommend trying their services. "</p>
                    <span className="line"></span>
                    <h3 className="card1-name">Ms. Rose</h3>               
                 </div>

                
                  <div className="card2">
                      <img className="card2-pic" src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" width={70} height={65}/>
                      <p className="card2-comment">" The basic package helped me improve my presentation skills.<br/>Thanks to accent's coaches for helping me out. "</p>
                      <span className="line"></span>
                      <h3  className="card2-name">Ms. Jess</h3>    
                  </div>
              </div>
                
                


    


    
        </div>
    )
}

export default Testimonials;
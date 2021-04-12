import React from 'react';

import {BiComment} from 'react-icons/bi';
import {RiHome2Line} from 'react-icons/ri';
import { CgList} from 'react-icons/cg';
import {HiOutlineUsers} from 'react-icons/hi';
import {IoCallOutline} from 'react-icons/io5';
import {BsQuestionSquare} from 'react-icons/bs';
import {FcBusinessman,FcBusinesswoman} from 'react-icons/fc';
import Back from './Back-btn';


const About =({click})=>{
  
return (
  
  
    
  
            


    

    <div className="">
        {click? <Back />:null}
    <div className="about-para-wrapper" id="about">
          <div  className="about-para" >
                <h2 className="text-center h2 about-headline"> About us</h2>
                  <p className="text-center">Hi, we assist people with better communication </p>
                  <p>We have been working in the area of Communication and Coaching for about 20 years.  We aim to deliver best results for our clients.</p>
                  <br/>
                  <h3> Why choose us?</h3>
                   <ul>
                      <li>Intensive, tailor-made sessions delivered on your terms and on your schedule</li>
                      <li>Highly experienced, calm and empathic coaches</li>
                      <li>Honest, direct and focused feedback</li>
                  </ul>
                  <br/>
                 <h3>Meet our Coaches</h3>
                 
                 <div className="about-coaches">
                    <FcBusinesswoman clasName="" size={150}/>

                    <FcBusinessman className="" size={150}/>
                    <br/>
                    <FcBusinessman className="" size={150}/>
                   <FcBusinesswoman   className="" size={150}/>
                </div>
                <br/>
                  <p className="font-italic text-center" >We are happy to connect with you over telephone or chat in person, so if you have any questions about our services, please contact us.</p>
                 
            </div>
                
                      
    </div> 
    <span className="line"></span>
          
    </div>   

    )
}
  
export default About;

         
  





                
                

         





   


import React from 'react';


const About =({styleText,styleWrap})=>{
    
    return (

<div className="about-para-wrapper" style={styleWrap} >
        <div  className="about-para" style={styleText}>
                
                <h2 className="h3  text-center ">Hi, we assist people with better communication </h2>
                
                <p><br/>We have been working in the area of Communication and Coaching for about 20 years.  We aim to deliver best results for our clients.   </p>
                <br/>
                <p className="font-italic text-center" >We are happy to connect with you and provide you with what you are looking. We are always very happy to chat so if you have any questions about our services, please contact us.</p>

         
        </div>
    </div> 
  )
}





   


export default About;
import React from 'react';




const About =({reference,event})=>{
  

console.log()
return (
  
    <div ref={reference}className="about-para-wrapper" id="about">
  
          <div  className="about-para" >
                <h2 className="text-center h2 about-headline"> Know more about us!</h2>
                  <p className="text-center">We assist people with better communication </p>
                  <p>We have been working in the area of Communication and Coaching for about 20 years.  We aim to deliver best results for our clients.</p>
                  <br/>
                  <h3 className="headings"> Why choose us?</h3>
                   <ul>
                      <li>Intensive, tailor-made sessions delivered on your terms and on your schedule</li>
                      <li>Highly experienced, calm and empathic coaches</li>
                      <li>Honest, direct and focused feedback</li>
                  </ul>
                  <br/>
                 <h3 className="headings">Meet our Coaches</h3>
                 
                 <div className="about-coaches">
                   <div>
                   <img alt="person"className="about-img" src="https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width={250} height={220}/>
                   <span className="about-coaches-name">Jack</span>
                   </div>
                   <img alt="person"className="about-img" src="https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width={250} height={220}/>
                 
                   <img alt="person" className="about-img" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" width={250} height={220}/>
                </div>

                 
                  
                <br/>
                  <p className="font-italic text-center" >We are happy to connect with you over telephone or chat in person, so if you have any questions about our services, please contact us.</p>
                 
            </div>
              <hr color='white'/>  
                      
    </div> 
   
          
    

    )
}
  
export default About;

         
  





                
                

         





   


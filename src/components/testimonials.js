import React from 'react';
import TestimonialCard from '../mini-components/testimonial-card';
import testimonial1 from '../img/testimonial1.jpeg';
import testimonial2 from '../img/testimonial2.jpeg';
import testimonial3 from '../img/testimonial3.jpeg';
import testimonial4 from '../img/testimonial4.jpeg';

const slideshare=[

  {
 
    src:testimonial1,
    name:'Ms.Rose',
    comment:"My communication has improved so much after using Accent's Platinum package. I would definitely recommend all to try their services."
    
  },
          
  {
    src:testimonial2,
    name:'Ms.Jess',
    comment:"The basic package helped me improve my presentation skills.Thanks to accent's coaches for helping me out." 
           
  },
  {
     src:testimonial3,
     name:"Ms.Rene",
     comment:"Thanks Kiara for helping me improve my communication skills."
          
  },
  
{
  src:testimonial4,
  name:"Mr. Ray",
  comment:"It has been a wonderful experience with Accent for personal development training."
  
}
]
class Testimonials extends React.Component{
   constructor(props){
       super(props)
  this.state={ i: 0}
  this.handleIncrement=this.handleIncrement.bind(this);
  this.handleDecrement=this.handleDecrement.bind(this);
   }

   handleIncrement(){
   this.setState({i: this.state.i===3? 0: this.state.i+ 1})
  }
      
   
       
   handleDecrement(){
     this.setState({i: this.state.i===0? 3: this.state.i-1})
    }
   

  
   render(){ 
       const{i}=this.state;


    
return(

<div className="testimonials-bg" id="testimonials">
       <h1 className="testimonials-headline">Testimonials</h1>

     

<div className="testimonials">
    { slideshare.map((obj,index)=>{
        return ( 
          <div  key={index} >
            
            {index=== i && (
            <TestimonialCard 
              src={obj.src}
              name={obj.name}
              comment={obj.comment}
            />
            )
            }
              
        </div>
        )
    })}

</div>
    



        <div className="scroll-buttons">
           <button  onClick={ this.handleDecrement}className="left-btn"></button>
           <button   onClick={this.handleIncrement}  className="right-btn"></button>
        </div>

   
    
    
     
             
  
</div>
  
  
          


  )
}
}

export default Testimonials;
           
               
             
    


                 
                
            


    


    

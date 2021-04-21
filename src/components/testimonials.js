import React from 'react';
import TestimonialCard from '../mini-components/testimonial-card';


// function increment(){
//     return {
          
//     }
// }
class Testimonials extends React.Component{
   constructor(props){
       super(props)
  this.state={ increment: 1}
  this.handleIncrement=this.handleIncrement.bind(this);
  this.handleDecrement=this.handleDecrement.bind(this);
   }

    handleIncrement(){
    this.setState({increment: this.state.increment + 1 })

}
    
    handleDecrement(){
    this.setState({increment: this.state.increment -1 })

}
    



  render(){ 
      const{increment}=this.state;
 
  
      
  
  
   
  
    console.log(this.state.increment);
    return(

        <div className="testimonials-bg" id="testimonials">

       <h1 className="testimonials-headline">Testimonials</h1>
   

    {
      (()=> {
        switch (increment) {
          
          case 1: return <TestimonialCard

          src="https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          name="Ms.Rose"
          comment="My communication has improved so much after using Accent's Platinum package. I would definitely recommend all to try their services."
          />;

          case 2: return <TestimonialCard
        
          src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          name="Ms.Jess"
          comment="The basic package helped me improve my presentation skills.Thanks to accent's coaches for helping me out."/> ;
          

          case 3: return <TestimonialCard
         
          src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          name="Ms.Rene"
          comment="Thanks Kiara for helping me improve my communication skills."
          
          />;
          case 4 : return <TestimonialCard
         
          src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          name="Mr. Ray"
          comment="Thanks Kiara for helping me improve my communication skills."
          
          />
        


          default: return <TestimonialCard

          src="https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          name="Ms.Rose"
          comment="My communication has improved so much after using Accent's Platinum package. I would definitely recommend all to try their services."
          />;

         
        }
      })()
    }
    
      
     
  
           
               
             
    
        <div className="scroll-buttons">
           <button  onClick={ this.handleDecrement}className="left-btn"></button>
           <button   onClick={this.handleIncrement}  className="right-btn"></button>
        </div>
             


        </div>
                 
                
            


    


    
    )
}
}

export default Testimonials;
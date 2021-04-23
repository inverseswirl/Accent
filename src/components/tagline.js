import React from 'react';
import Navbar from './navbar';
import Footer from './footer';


class Tagline extends React.Component{
    constructor(props){
      super(props)
      this.state={button: false,position:'' }
     this.handleBtn=this.handleBtn.bind(this);
    }
   
 handleBtn(){
   this.setState({button:true,position:'fixed'})
  this.props.backStyle(
    "linear-gradient(grey,#0276FD)"
  )
 }
  
 render(){
    const{button,position}=this.state
     console.log(button)
    if(button){
       return (
      
           <div>
            <Navbar fixedPosition={position} /> 
            <Footer/>
          </div>
       
       ) 
     }
  
 
    return(
    
      <div className="" >
       
         <h2  className="tagline" style={{display: this.props.dis}}>" We help you communicate better "</h2> 
        
         <button 
         
         className="tagline-btn" 
         style={{display: this.props.dis}} 
         onClick={this.handleBtn}>Menu</button>
         
      </div>
   
    )
 
 
   }
 }
       
     
         
export default Tagline;
   
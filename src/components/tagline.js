import React from 'react';
import Navbar from './navbar';


class Tagline extends React.Component{
    constructor(props){
      super(props)
      this.state={button: false}
     this.handleBtn=this.handleBtn.bind(this);
    }
   
 handleBtn(){
   this.setState({button:true })
   this.props.backStyle("linear-gradient(90deg, rgba(18,18,18,0.1) 30%,transparent 30%),url('https://images.pexels.com/photos/2952871/pexels-photo-2952871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')")
 }
  
 render(){
    const{button}=this.state
     
    if(button){
       return (
         <div className="flexbox">
            <Navbar/> 
         </div>  
       ) 
     }
  
 
    return(
    
      <div className="firsttag">
         <h2  className="tagline">" We help you communicate better "</h2> 
         <button className="tagline-btn" onClick={this.handleBtn}>Menu</button>
         
      </div>
    )
 
 
   }
 }
       
     
         
export default Tagline;
   
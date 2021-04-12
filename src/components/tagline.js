import React from 'react';
import Navbar from './navbar';
import Title from '../components/title';


class Tagline extends React.Component{
    constructor(props){
      super(props)
      this.state={button: false,position:'' }
     this.handleBtn=this.handleBtn.bind(this);
    }
   
 handleBtn(){
   this.setState({button:true,position:'fixed'})
   this.props.backStyle("linear-gradient(90deg, rgba(18,18,18,0.1) 25%,transparent 25%),url('https://images.pexels.com/photos/2952871/pexels-photo-2952871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')")
 }
  
 render(){
    const{button}=this.state
     
    if(button){
       return (
         <div>
            <Title  styleTitle={{position: 'fixed',top:'1%',left:'1%'}}/>
            <Navbar styleNav={{position: 'fixed',top:'11%',left:'1%'}}/> 
            </div>
       
       ) 
     }
  
 
    return(
    
      <div className="" >
       
         <h2  className="tagline" style={{display: this.props.dis}}>" We help you communicate better "</h2> 
         <button className="tagline-btn" style={{display: this.props.dis}} onClick={this.handleBtn}>Menu</button>
       
      </div>
   
    )
 
 
   }
 }
       
     
         
export default Tagline;
   
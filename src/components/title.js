import React from 'react';
import About from './about-page';
import {GoComment} from 'react-icons/go';
import { BsCardList} from 'react-icons/bs';
import Services from '../components/service-page';
import Navbar from './navbar';
import Background from '../style/background';
import Home from '../components/home';


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
      
    
        

  
        
    
    
 






class Title extends React.Component{
  constructor(props){
    super(props)
    this.state={ 
      aboutClick: false, 
      serviceClick: false, 
      services: "",
      boxShadow: '0',
    }
     
   
    
  
   this.handleAboutus=this.handleAboutus.bind(this);
   this.handleServicepage=this.handleServicepage.bind(this);

  }


  handleAboutus(){
    this.setState({
     aboutClick: true,
      width: '70vw',
      boxShadow: '1px 1px 10px rgb(21, 110, 184)',
      display: 'none'
    })
     
    }
        
handleServicepage(){
 this.setState({
  serviceClick: true,
})
}
  
  render(){
 
  const{aboutClick,serviceClick,dot,opacity,width,boxShadow ,display,services}=this.state

    return(
<>
<div className="main">
        <h1 className="title">A<span className="letter">c</span><span className="letter">c</span>ent  </h1>
        </div>
    
      <Tagline  backStyle={this.props.onTrigger}/> 
    
</>
       
         
  )
}
}
export default Title;
    
           

         
          
        
      
               
              
             
         
         
                  
       





       

  
  
 

      
           
       










          
            






          
                
            











 
         
           
           
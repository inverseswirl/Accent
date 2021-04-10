import React from 'react';
import About from './about-page';
import {GoComment} from 'react-icons/go';
import { BsCardList} from 'react-icons/bs';
import Services from '../components/service-page';
import Navbar from './navbar';
import Background from '../style/background';


class Tagline extends React.Component{
   constructor(props){
     super(props)
     this.state={button: false}
    this.handleBtn=this.handleBtn.bind(this);
   }
 
   
handleBtn(){
  this.setState({button:true 
  })
  this.props.backStyle("linear-gradient(90deg,rgba(184, 183, 184,1) 12%,transparent 30%),linear-gradient(98deg, rgb(179, 112, 179) 40%,transparent 40%,rgba(179, 112, 179,0.7) 87%),url('https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
  )
 
}
render(){
   const{button}=this.state
   
   if(button){
     return (
          <Navbar/>  
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
           {/* {serviceClick ? <h2  style={{display: display}} className="tagline"> "We help you communicate better "</h2>: null }
           
          {aboutClick? <About  styleText={{opacity:opacity}}
             styleWrap={{width: width,   boxShadow: boxShadow }}
           /> : null}
           { serviceClick ? <Services  />  : null } */}
           {/* { serviceClick ? null:  <h3>Find out more  </h3> } */}
              {/* { serviceClick ?  <button type="button" style={{display: display}}className="button nav-bg ">Testimonials</button> : null}
               { serviceClick? <button type="button" style={{display: display}} className="button nav-bg ">Contact us</button>: null}
               { serviceClick ?  <button type="button" style={{display: display}} className="button nav-bg ">FAQs</button>: null }  */}
</div>    
      <Tagline  backStyle={this.props.onTrigger}/> 
</>
       
         
  )
}
}
    
           

         
          
export default Title;
        
      
               
              
             
         
         
                  
       





       

  
  
 

      
           
       










          
            






          
                
            











 
         
           
           
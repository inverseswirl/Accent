import React from 'react';
import About from './about-page';
import {GoComment} from 'react-icons/go';
import { BsCardList} from 'react-icons/bs'
import Services from '../components/service-page';
import Navbar from './navbar';


class Tagline extends React.Component{
   constructor(props){
     super(props)
     this.state={display: ''}
     this.handleBtn=this.handleBtn.bind(this);
   }

handleBtn(){
  this.setState({display: 'none'})
}
  render(){
  const{display}=this.state
  return(
    <div>
       <h2  style={{display: display}}className="tagline"> " We help you communicate better "</h2> 
       <button style={{display: display}}className="tagline-btn" onClick={this.handleBtn}>Menu</button>
     {display? <Navbar />: null}
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
      dot:"",
      services: "",
      opacity: 0,
      width: '0vw',
      boxShadow: '0',
      display: ''
     }
   this.handleAboutus=this.handleAboutus.bind(this);
   this.handleServicepage=this.handleServicepage.bind(this);

  }


  handleAboutus(){
    this.setState({
     aboutClick: true,
      dot: <GoComment /> ,
      opacity: 1,
      width: '70vw',
      boxShadow: '1px 1px 10px rgb(21, 110, 184)',
      display: 'none'
    })
     
    }
        
handleServicepage(){
 this.setState({
  serviceClick: true,
   display: 'none',
   services: < BsCardList/>
})
}
  
  render(){
 
  const{aboutClick,serviceClick,dot,opacity,width,boxShadow ,display,services}=this.state
 console.log(aboutClick,serviceClick);
    return(
<>
<div className="main">
        <h1 className="title">A<span className="letter">c</span><span className="letter">c</span>ent Group </h1>
    
         
       
           <br />
          
           {serviceClick ? <h2  style={{display: display}} className="tagline"> "We help you communicate better "</h2>: null }
           
          {aboutClick? <About  styleText={{opacity:opacity}}
             styleWrap={{width: width,   boxShadow: boxShadow }}
           /> : null}

           { serviceClick ? <Services  />  : null }
           {/* { serviceClick ? null:  <h3>Find out more  </h3> } */}
           
              { serviceClick ?  <button type="button" style={{display: display}}className="button nav-bg ">Testimonials</button> : null}
               { serviceClick? <button type="button" style={{display: display}} className="button nav-bg ">Contact us</button>: null}
               { serviceClick ?  <button type="button" style={{display: display}} className="button nav-bg ">FAQs</button>: null }
        
</div>    
      
      <Tagline /> 
</>
    )
  }
  }
               
              
             
         
         
                  
       
export default Title;





       

  
  
 

      
           
       










          
            






          
                
            











 
         
           
           
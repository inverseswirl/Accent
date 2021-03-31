import React from 'react';
import About from '../components/about-us';



function slow(){
  
  return {
    opacity:1
  }
}




class Title extends React.Component{
  constructor(props){
    super(props)
   this.state={ buttonClick: false,  dot:"",opacity: 0}
   this.handleAboutus=this.handleAboutus.bind(this);
  }



  
handleAboutus(){
    this.setState({buttonClick: true,dot: '< ----',opacity: 1});
   
  }

  
  
 

  render(){

    const{buttonClick,dot,opacity}=this.state
   
    return(

<div className="main">
        <h1 className="title">pr<span className="letter">o</span>n<span className="letter">o</span>unce it! </h1>
        <nav className="navbar ">
              <button  type="button" className="button nav-bg ">Home</button>
              <button onClick={this.handleAboutus}  type="button" className="button nav-bg ">{dot}About us</button>

              { buttonClick ? null :<button type="button" className="button nav-bg ">Services</button>}
              { buttonClick ? null: <button type="button" className="button nav-bg ">Testimonials</button>}
               { buttonClick ? null:<button type="button" className="button nav-bg ">Contact us</button>}
               { buttonClick ? null: <button type="button" className="button nav-bg ">FAQs</button>}
               <About  style={{opacity:opacity,transition: 'opacity 0.3s linear 0.1s'}}/>
              
             
        </nav>
         
         
       
       
      
           
       










</div>       
                  
  )
}
}
          
export default Title;
            






          
                
            











 
         
           
           
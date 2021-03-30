import React from 'react';
import About from '../components/about-us';


class Title extends React.Component{
  constructor(props){
    super(props)
   this.state={ about: ""}
   this.handleAboutus=this.handleAboutus.bind(this);
  }



  handleAboutus(){
  this.setState({about: <About />})
  }

  render(){

    return(

<div className="main">
        <h1 className="title">pr<span className="letter">o</span>n<span className="letter">o</span>unce it! </h1>
        <nav className="navbar ">
              <button  type="button" className="button nav-bg ">Home</button>
              <button  onClick={this.handleAboutus}  type="button" className="button nav-bg ">About us</button>
            
              <button type="button" className="button nav-bg ">Services</button>
              <button type="button" className="button nav-bg ">Testimonials</button>
              <button type="button" className="button nav-bg ">Contact us</button>
              <button type="button" className="button nav-bg ">FAQs</button>
        </nav>
         
         
       
        <div>{this.state.about}</div> 
      
           
       










</div>       
                  
  )
}
}
          
export default Title;
            
          
                
            











 
         
           
           
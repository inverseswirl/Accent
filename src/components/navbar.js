import React from 'react';
import About from '../components/about-page';
import Home from '../components/home';
import Services from './service-page';
import Testimonials from './testimonials';
import Prepricing from '../mini-components/pre-pricing';




class Navbar extends React.Component{
constructor(props){
    super(props)
   
    this.pricing = React.createRef();
    this.about = React.createRef();
  
    this.handleClick=this.handleClick.bind(this)
    this.handleAbout=this.handleAbout.bind(this)

}


       
handleClick(e){

   this.pricing.current.scrollIntoView({
       behaviour:"smooth",
       block:"start"
    });
}

handleAbout(e){
  
this.about.current.scrollIntoView({
  behaviour:"smooth",
  block:"start"
  });
}
 

render(){
//   const{aboutClick,serviceClick}=this.state;


return(
 <div className=""> 
    


        <nav className="navbar" style={{position: this.props.fixedPosition}}>
              <button type="button" className="button nav-bg ">
                <a href="#home"> |Home </a> </button>
              
              <button  onClick={this.handleAbout} type="button" className="button nav-bg ">
              |About us
               </button>
             
              <button type="button"  className="button nav-bg ">
                  <a href="#services"> |Services</a></button>
              <button type="button" className="button nav-bg ">
     |Contact us</button>
              <button onClick={this.handleClick} type="button" className="button nav-bg ">
                  |Pricing</button>
              <button type="button"  className="button nav-bg ">
              <a href="#testimonials"> |Testimonials</a></button>
        </nav>
       
           
  
      <Home />
       <About reference={this.about}/>
       <Services/>
     <Prepricing reference={this.pricing}/>
      
       <Testimonials/>
       
      
              
              

    
    </div>  
       
 )


}
}
      
    

               
    





export default Navbar;


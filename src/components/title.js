import React from 'react';
import About from './about-page';
import {GoComment} from 'react-icons/go';



class Title extends React.Component{
  constructor(props){
    super(props)
   this.state={ 
     buttonClick: false,  
     dot:"",
     opacity: 0,
     width: '0vw',
     boxShadow: '0'
    }
   this.handleAboutus=this.handleAboutus.bind(this);
  }


  handleAboutus(){
      this.setState({
        buttonClick: true,
        dot: <GoComment /> ,
        opacity: 1,
        width: '70vw',
        boxShadow: '1px 1px 10px rgb(21, 110, 184)'
      })
     
    }
        

  
  render(){

    const{buttonClick,dot,opacity,width,boxShadow}=this.state

    return(

<div className="main">
        <h1 className="title">pr<span className="letter">o</span>n<span className="letter">o</span>unce it! </h1>
        <nav className="navbar ">
              <button type="button" className="button nav-bg ">Home</button>
              <button onClick={this.handleAboutus}  type="button" className="button nav-bg ">{dot} About us</button>
              
              { buttonClick ? null :<button type="button" className="button nav-bg ">Services</button>}
              { buttonClick ? null: <button type="button" className="button nav-bg ">Testimonials</button>}
               { buttonClick ? null:<button type="button" className="button nav-bg ">Contact us</button>}
               { buttonClick ? null: <button type="button" className="button nav-bg ">FAQs</button>}
        </nav>

         <About  styleText={{opacity:opacity, transition : 'opacity 0.5s ease 0.39s'}}
             styleWrap={{width: width,  transition:  'width 0.4s ease 0s', boxShadow: boxShadow }}
           />   
       
</div>    
        
    )
  }
  }
               
              
             
         
         
                  
       
export default Title;





       

  
  
 

      
           
       










          
            






          
                
            











 
         
           
           
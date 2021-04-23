import React from 'react';
import Background from '../style/background';

import Navbar from './navbar';
// import Background from '../style/background';
// import Home from '../components/home';
// import Tagline from '../components/tagline';



        
class Title extends React.Component{
  constructor(props){
    super(props)
    this.state={titleBtn: false}
    this.handletitleBtn=this.handletitleBtn.bind(this);
}
     
handletitleBtn(){
  this.setState({titleBtn: true})
   
 
}
 
render(){
  const{titleBtn}=this.state

 

    return(

   <div className="main" >
     <button  
     style={this.props.bg && window.innerWidth<815?{backgroundImage:'linear-gradient(180deg,rgb(202, 202, 202) 50%, grey 99%)'}:null}
     onClick={this.handletitleBtn} 
     className="title">A<span className="letter">c</span><span className="letter">c</span>ent  
     </button>
    
    {titleBtn?<Navbar/>:null}
      
      


     </div>
    
    
    

       
  )


         
}
}
export default Title;
    
  

// style={{backgroundImage: this.props.background,backgroundSize:'cover',overflow:'hidden'}}


 

  
    
           

         
          
        
      
               
              
             
         
         
                  
       





       

  
  
 

      
           
       










          
            






          
                
            











 
         
           
           
import React from 'react';

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
  this.props.backStyle("linear-gradient(90deg, rgba(18,18,18,0.1) 25%,transparent 25%),url('../img/pexels-engin-akyurt-2952871.jpg')")
   
 
}
 
render(){
  const{titleBtn}=this.state

 

    return(

   <div className="main" >
     <button style={this.props.styleTitle} onClick={this.handletitleBtn} className="title">A<span className="letter">c</span><span className="letter">c</span>ent  </button>
    
    {titleBtn?<Navbar/>:null}
      
      


     </div>
    
    
    

       
  )


         
}
}
export default Title;
    
  

// style={{backgroundImage: this.props.background,backgroundSize:'cover',overflow:'hidden'}}


 

  
    
           

         
          
        
      
               
              
             
         
         
                  
       





       

  
  
 

      
           
       










          
            






          
                
            











 
         
           
           
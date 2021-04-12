import React from 'react';
import About from '../components/about-page';
import Services from '../components/service-page';
// import Title from '../components/title';
import Tagline from '../components/tagline';
import Title from '../components/title';


class Background extends React.Component{
   constructor(props){
      super(props)
     this.state={background:'',display:""}
     this.handleStyle=this.handleStyle.bind(this)
   }

handleStyle(background){
 this.setState({background: background,display:'none'})
}

render(){
  const{background,display}=this.state

return(
  
      <div className="background" style={{backgroundImage: background}}> 
          <Title backStyle={this.handleStyle} />
          <Tagline  dis={display} backStyle={this.handleStyle}bg={background}/>
   
     
          
      </div>
          
         
      
      
      
     
   
    )
}
}
          
export  default Background;
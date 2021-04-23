import React from 'react';
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
          <Title bg={background} />
          <Tagline  dis={display} backStyle={this.handleStyle} bg={background}/>
   
     
          
      </div>
          
         
      
      
      
     
   
    )
}
}
          
export  default Background;
import React from 'react';
import Title from '../components/title';


class Background extends React.Component{
   constructor(props){
      super(props)
     this.state={background:''}
     this.handleStyle=this.handleStyle.bind(this)
   }

handleStyle(background){
 this.setState({background: background})
}
render(){
  const{background}=this.state

return(
  
      <div className="background" style={{backgroundImage: background}}> 
          <Title onTrigger={this.handleStyle}/>
          
      
      
      </div>
      
      
     
   
      )
}
}
          
export  default Background;
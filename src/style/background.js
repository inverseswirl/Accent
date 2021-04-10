import React from 'react';
import About from '../components/about-page';
import Services from '../components/service-page';
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
          {/* {background? <About/> :null}
          {background? <Services/> :null} */}

          
      </div>
          
         
      
      
      
     
   
    )
}
}
          
export  default Background;
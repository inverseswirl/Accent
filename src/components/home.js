import React from 'react';
import Toggle from '../style/togglebtn';
import Navbar from './navbar';




class Home extends React.Component{
constructor(props){
  super(props)
   this.state={toggle: false}
  this.handleToggle=this.handleToggle.bind(this);
}

handleToggle(){
     this.setState({toggle:true})
     this.props.backStyle("linear-gradient(darkslategrey,black)")
   
}
  render(){
    


    return (
      <div className="home" id="home">
        <Toggle/>
        <h1 className="home-headline">Why effective communication skills training? <span><button onClick={this.handleToggle} className="toggle">ON</button></span></h1>
        
        <p className="home-para">
        <br/>
        <br/>
        It is proven that success both personally and professionally is about effective communication skills. Such skills are highly prized in creative, knowledge-based workforces. As technology shifts the working landscape, and teams become increasingly diverse, good communication in all its forms becomes more than a nice to have. Bloomberg’s Annual Skills Report regularly places Communication as the number one skill actively considered by recruiting firms.
        <br/>
        <br/>
        At Accent we help our clients build techniques and confidence for handling a range of communication styles, people and situations.</p>
     

    </div>
           
           
            
)
}
}

export default Home;
 
          
import React from 'react';
import Pricing from '../components/pricing';


class Prepricing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            btn: false
        }

      this.handleChange=this.handleChange.bind(this);        
    }

      handleChange(){
       this.setState({btn:true})
      }

render(){
const{btn}=this.state
    if(btn){
     return <Pricing/>
    }
    return (

        <div ref={this.props.reference} className="pre-pricing">
            
            <h1 className="pre-pricing-headline"> Discover the plans</h1>
            <p className="pre-pricing-para">We have created the best packages that will suit the needs of individuals as well as corporate group classes.</p>
           <button onClick={this.handleChange} className="pre-pricing-button"> Check our plans here</button>
        </div>
    )
}
}

export  default Prepricing;
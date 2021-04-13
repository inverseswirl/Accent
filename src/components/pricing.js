import React from 'react';
import react from 'react';
import {GiFlowerPot} from 'react-icons/gi';
import {HiAcademicCap} from 'react-icons/hi';
import {MdGrade} from 'react-icons/md';

class  Pricing  extends React.Component{
constructor(props){
  super(props)
  this.state={animation:'none'}
  this.handleAnime=this.handleAnime.bind(this);
}


componentDidMount() {
  window.addEventListener('scroll', this.handleAnime);
}

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleAnime);
}
handleAnime(){
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

}
  render(){
  
  
    return(
      <div className="pricing" id="pricing">

          <div className="pricing-card1">
           <GiFlowerPot size={50}/>
            <h2>  Prep </h2>
            <h3>4 sessions</h3>
            <div>
              <p >380<sup className="pricing-dollar">$</sup></p> 
              </div>
          </div>
            
          <div className="pricing-card2">
          <MdGrade size={52}/>
            <h2>Pro  </h2>
            <h3>6 sessions</h3>
              <p className="shadows" >540<sup className="pricing-dollar">$</sup></p>
          </div>

          <div className="pricing-card3">
          <MdGrade size={50}/>  <MdGrade size={50}/>
            <h2>Platinum Individual</h2>
            <h3> 12 sessions </h3>
              <p className="shadows">1060<sup className="pricing-dollar">$</sup></p> 
          </div>

          <div className="pricing-card4">
            <HiAcademicCap size={50}/>
            <h2>Corporate leader </h2>
            <h3>12 sessions</h3>
              <p className="shadows">1375<sup className="pricing-dollar">$</sup></p> 
          </div>

       </div>
         
    )
}
}
export default Pricing;
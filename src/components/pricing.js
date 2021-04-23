import React from 'react';
import PriceCard from '../mini-components/price-cards';
import {GiFlowerPot} from 'react-icons/gi';
import {HiAcademicCap} from 'react-icons/hi';
import {MdGrade} from 'react-icons/md';


class  Pricing  extends React.Component{
constructor(props){
  super(props)
}

render(){
  
  
    return(
 
      
      <div className="pricing-wrapper" id="pricing">
      <h1 className="pricing-headline">Plans for You</h1>
        <div className="pricing">
          <PriceCard
          packageName="Prep"
          sessions="4 sessions"
          price="380">
            <GiFlowerPot size={53}/>
          </PriceCard>
         

          <PriceCard
          packageName="Pro"
          sessions="6 sessions"
          price="540">
            <MdGrade size={52}/>
          </PriceCard>

          <PriceCard
          packageName="Platinum Individual"
          sessions="12 sessions"
          price="1060">
            <MdGrade size={50}/>  <MdGrade size={50}/>
          </PriceCard>
            
          <PriceCard
          packageName="Corporate Leader"
          sessions="12 sessions"
          price="1375">
            <HiAcademicCap size={50}/>
          </PriceCard>
            
       </div>
       
      
       </div>

   
    )
}
}
export default Pricing;
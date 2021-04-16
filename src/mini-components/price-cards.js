import React from 'react';


const PriceCard=({packageName,sessions,price,children})=>{

    return(
        <div   className="pricing-card">
            {children}
            <h2>{packageName} </h2>
            <h3>{sessions}</h3>
            <div>
              <p className="shadows">{price}<sup className="pricing-dollar">$</sup></p> 
              </div>
          </div>
    )
}
export default PriceCard;
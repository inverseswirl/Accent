import React from 'react';


const PriceCard=({packageName,sessions,price,children})=>{

    return(
        <div   className="pricing-card">
            {children}
            <h2>{packageName} </h2>
            <h3>{sessions}</h3>
            <p className="price shadows">
                {price}
            <span className="price-dollar">$</span>
            </p> 

           
          </div>
    )
}
export default PriceCard;
import React from 'react';

const Services=()=>{

    const arr= ['Individual sessions at Office', 'Online sessions at home', 'Accent reduction group classes for organisations']
    return (
        <div className="service-page">
        <h1 >Service Offerings </h1>
        <ul className="list">
            {
              arr.map((item)=>{
              return <li key={item} className="slider-item">{item}</li>
              })
            }
        </ul>
        
        </div>

    )
}
export default Services;
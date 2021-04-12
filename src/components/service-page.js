import React from 'react';
import Back from './Back-btn';


const Services=()=>{

    const arr= ['Individual sessions at Office', 'Online sessions at home', 'Communication group classes for organisations']
    
    return (
<div className="">



   <div className="service-page" id="services">
           <h1 className="h1 text-center service-headline">Service Offerings </h1>
            <p>Our tailored training services take care to consider the subtleties of human communication in your organization whilst also understanding your business requirements. Step one is we listen – actively – to your business communication challenges. This in-depth understanding leads us carefully to step two – the design of a purpose-built soft skills training solution for your needs and at your pace. Finally we measure  – both against your original position and benchmarked industry standards.We offer:</p>   
           
            <div className="services">
                <ul className="list">
                    { arr.map((item)=>{
                        return <li key={item} className="list-item">{item}</li>
                        })
                    }
                </ul>
            </div>

            <div className="service-table">
                <h3 className="h3 text-center">Pricing</h3>
            <table >
                <tr>
                    <th>No. of sessions</th>
                    <th>Total Cost</th>
                </tr>
                <tr>
                    <td>3 sessions</td>
                    <td>$380</td>
                </tr>
                <tr>
                    <td>5 sessions</td>
                    <td>$670</td>
                </tr>
                <tr>
                    <td>10 sessions</td>
                    <td>$1200</td>
                </tr>
            </table>
            </div>
    </div>
    <span className="line"></span> 
           
    </div>
    )
}
export default Services;
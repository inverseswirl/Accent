import React from 'react'
import { RiWechatLine } from 'react-icons/ri'

const Services = () => {
  const arr = ['Individual sessions at Office', 'Online sessions at home', 'Leadership training in groups for organisations', 'Presentation skills for individual or groups']
  return (
  <div className="">
   <div className="service-page" id="services">
           <h1 className="h1 text-center service-page-headline">Service Offerings </h1>
            <p className="service-page-para">Our tailored training services take care to consider the subtleties of human communication in your organization whilst also understanding your business requirements. Step one is we listen – actively – to your business communication challenges. This in-depth understanding leads us carefully to step two – the design of a purpose-built soft skills training solution for your needs and at your pace. Finally we measure  – both against your original position and benchmarked industry standards.We offer:</p>
            <ul className="list">
                { arr.map((item) => {
                  return <li key= {item} className="list-item"><RiWechatLine style={{ marginRight: '6px' }} color="darkslategrey"/> {item}</li>
                })
                }
            </ul>
         <br/>
          <hr color='white'/>
             </div>
    </div>
  )
}

export default Services

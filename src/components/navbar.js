import React from 'react';
import {BiComment} from 'react-icons/bi';
import {RiHome2Line} from 'react-icons/ri';
import { CgList} from 'react-icons/cg';
import {HiOutlineUsers} from 'react-icons/hi';
import {IoCallOutline} from 'react-icons/io5';
import {BsQuestionSquare} from 'react-icons/bs';
import About from '../components/about-page';
import Home from '../components/home';
import Services from './service-page';
import Pricing from './pricing';



class Navbar extends React.Component{
constructor(props){
    super(props)
    this.state={ 
        aboutClick: false, 
        serviceClick: false
       
    }
    this.pricing = React.createRef();
    this.handleClick=this.handleClick.bind(this)

}


       
handleClick(){

   this.pricing.current.scrollIntoView({
    behavior: "smooth", 
    block: "nearest"
   })
}

render(){
//   const{aboutClick,serviceClick}=this.state;
    

return(
 <div className=""> 
    

        
        <nav className="navbar" style={this.props.styleNav}>
              <button type="button" className="button nav-bg ">
                <a href="#home"> <RiHome2Line className="bg-transparent" color='rgba(26, 72, 110, 0.8)' size={29} /> |Home </a> </button>
              
              <button   type="button" className="button nav-bg ">
               <BiComment className="bg-transparent"color='rgba(26, 72, 110, 0.8)' size={29}/> |About us
               </button>
             
              <button type="button"  className="button nav-bg ">
                  <a href="#services"><CgList className="bg-transparent"color='rgba(26, 72, 110, 0.8)' size={28}/> |Services</a></button>
              <button type="button" className="button nav-bg ">
                 <IoCallOutline className="bg-transparent"color='rgba(26, 72, 110, 0.8)' size={30}/> |Contact us</button>
              <button onClick={this.handleClick} type="button" className="button nav-bg ">
                   <BsQuestionSquare className="bg-transparent"color='rgba(26, 72, 110, 0.8)' size={28}/> |Pricing</button>
              <button type="button"  className="button nav-bg ">
              <HiOutlineUsers className="bg-transparent"color='rgba(26, 72, 110, 0.8)' size={29}/> |Testimonials</button>
        </nav>
    
           
        
      
       <Home/>
       <About />
       <Services/>
       <Pricing referenceProp={this.pricing}/>
       
       
      
              
              

    
    </div>  
       
 )


}
}
      
    

               
    





export default Navbar;

{/* { aboutClick ? <button type="button"  style={{display: display}}className="button nav-bg ">Services</button>: null}
              { aboutClick ? null: <button type="button" style={{display: display}}className="button nav-bg ">Testimonials</button>}
               { aboutClick ? null:<button type="button" style={{display: display}} className="button nav-bg ">Contact us</button>}
               { aboutClick ? null: <button type="button" style={{display: display}}className="button nav-bg ">FAQs</button>} */}
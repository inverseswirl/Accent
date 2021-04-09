import React from 'react';
import {BiComment} from 'react-icons/bi';
import {RiHome2Line} from 'react-icons/ri';
import { CgList} from 'react-icons/cg';
import {HiOutlineUsers} from 'react-icons/hi'
import {IoCallOutline} from 'react-icons/io5'



class Navbar extends React.Component{

render(){
        
        
return(
 <div> 
    
        <nav className="navbar ">
        
              <button type="button" className="button nav-bg ">
                 <RiHome2Line className="bg-transparent" color='#ffffff' size={29} />  Home </button>
              <button  type="button" className="button nav-bg ">
                  <BiComment className="bg-transparent"color='#ffffff' size={29}/> About us </button>
              <button type="button"  className="button nav-bg ">
                  <CgList className="bg-transparent"color='#ffffff' size={28}/> Services </button>
              <button type="button" className="button nav-bg ">
                 <IoCallOutline className="bg-transparent"color='#ffffff' size={30}/> Contact us</button>
              <button type="button"  className="button nav-bg ">
              <HiOutlineUsers className="bg-transparent"color='#ffffff' size={29}/>Testimonials</button>
             
              {/* { aboutClick ? <button type="button"  style={{display: display}}className="button nav-bg ">Services</button>: null}
              { aboutClick ? null: <button type="button" style={{display: display}}className="button nav-bg ">Testimonials</button>}
               { aboutClick ? null:<button type="button" style={{display: display}} className="button nav-bg ">Contact us</button>}
               { aboutClick ? null: <button type="button" style={{display: display}}className="button nav-bg ">FAQs</button>} */}
       <span className="line"></span>
     </nav>
       

               
        
        </div>  
        )


    }
}





export default Navbar;
import React from 'react';
import {BiComment} from 'react-icons/bi';
import {RiHome2Line} from 'react-icons/ri';
import { CgList} from 'react-icons/cg';


class Navbar extends React.Component{

render(){
        
        
return(
 <div> 
    
        <nav className="navbar ">
        
        
              <button type="button" className="button nav-bg ">
                 <RiHome2Line className="bg-transparent" color='#ffffff' size={35} />  Home </button>
              <button  type="button" className="button nav-bg ">
                  <BiComment className="bg-transparent"color='#ffffff' size={35}/> About us </button>
              <button type="button"  className="button nav-bg ">
                  <CgList className="bg-transparent"color='#ffffff' size={35}/> Services </button>
              <button type="button"  className="button nav-bg ">Testimonials</button>
            
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
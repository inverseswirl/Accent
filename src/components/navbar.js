import React from 'react';
import {BiComment} from 'react-icons/bi';
import {RiHome2Line} from 'react-icons/ri';
import { CgList} from 'react-icons/cg';
import {HiOutlineUsers} from 'react-icons/hi';
import {IoCallOutline} from 'react-icons/io5';
import {BsQuestionSquare} from 'react-icons/bs';
import About from '../components/about-page';
import Home from '../components/home';



class Navbar extends React.Component{
constructor(props){
    super(props)
    this.state={ 
        aboutClick: false, 
        serviceClick: false
     
    }
this.handleClick=this.handleClick.bind(this)
}
handleClick(){
    this.setState({
        aboutClick: true, 
        serviceClick: true
    })
}

render(){
  const{aboutClick,serviceClick,background}=this.state;
    

return(
 <div className=""> 
    

        <nav className="navbar" >
        
              <button type="button" className="button nav-bg ">
                 <RiHome2Line className="bg-transparent" color='#6699cc' size={29} />  Home| </button>
              
              <button onClick={this.handleClick} type="button" className="button nav-bg ">
                <BiComment className="bg-transparent"color='#6699cc' size={29}/> About us|
                </button>
             
              <button type="button"  className="button nav-bg ">
                  <CgList className="bg-transparent"color='#6699cc' size={28}/> Services|</button>
              <button type="button" className="button nav-bg ">
                 <IoCallOutline className="bg-transparent"color='#6699cc' size={30}/> Contact us|</button>
                 <button type="button" className="button nav-bg ">
              <BsQuestionSquare className="bg-transparent"color='#6699cc' size={28}/> FAQs|</button>
              <button type="button"  className="button nav-bg ">
              <HiOutlineUsers className="bg-transparent"color='#6699cc' size={29}/> Testimonials|</button>
              
              {/* { aboutClick ? <button type="button"  style={{display: display}}className="button nav-bg ">Services</button>: null}
              { aboutClick ? null: <button type="button" style={{display: display}}className="button nav-bg ">Testimonials</button>}
               { aboutClick ? null:<button type="button" style={{display: display}} className="button nav-bg ">Contact us</button>}
               { aboutClick ? null: <button type="button" style={{display: display}}className="button nav-bg ">FAQs</button>} */}
      <span className="line"></span>
     </nav>
    <Home/>
   

    
    </div>  
       
      
    

               
    
        )


    }
}





export default Navbar;
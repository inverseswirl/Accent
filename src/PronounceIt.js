import React from 'react';
// import Centreleft from './components/centre-fold';
import Title from './components/title';
import './sass/App.scss';
import Background from './style/background';
import Home from './components/home';
import Homecontent from './components/content-home';
import About from './components/about-us'


class Pronounce extends React.Component{
 constructor(props){
     super(props)


 }




render(){
    return(

    <div className="App">
            <Background />
            <Title />
                {/* <Navbar /> */}
            {/* <About /> */}
            
             
                {/* <Home >
                <Homecontent />
                </Home> */}
   
  
  
  
  
  
  
  
  </div>
  )
 }
}


export default Pronounce;
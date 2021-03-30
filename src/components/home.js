import React from 'react';

const Home =(props)=>{

    return (
        <div className="flex">
           
           
            <div>{props.children}</div> 
            
            
          
        </div>
 )
}

     
export default Home;
import React from 'react';
import homeImg from '../img/homeImg.jpeg'



const Home =()=>{


  return (
      <div className="home" id="home">
       
        <h1 className="home-headline">Why effective communication skills training? </h1>
        <br/>
        <img className="home-img" alt="homeimg" style={{width: '100%',height: '440px'}} src={homeImg}/>
        
        <p className="home-para">
        <br/>
       
        
        It is proven that success both personally and professionally is about effective communication skills. Such skills are highly prized in creative, knowledge-based workforces. As technology shifts the working landscape, and teams become increasingly diverse, good communication in all its forms becomes more than a nice to have. Bloomberg’s Annual Skills Report regularly places Communication as the number one skill actively considered by recruiting firms.
        <br/>
        <br/>
        At Accent we help our clients build techniques and confidence for handling a range of communication styles, people and situations.</p>
     
        <hr color="white"/>   
    </div>
        
           
            
)
}


export default Home;
 
          
import React from 'react';
import {AiOutlineCaretRight} from 'react-icons/ai'
import {AiOutlineCaretLeft} from 'react-icons/ai'



function right(state,props){
    
   var arr= [ 'Be understood easily, the first time','Feel confident speaking to locals','Get the job you are qualified for','Prepare for job interviews, meetings and presentations', 'Prepare for IELTs, PTE, medical exams and others!'];
  

 console.log(state.id)
  if(state.id<5){
    return  {
        id: state.id+props.i,
        sentence: arr[state.id]
    }
   }else {
       return {
           id: 5,
           sentence: 'Prepare for IELTs, PTE, medical exams and others!'
       }
   }
}
        
  function left (state,{i}){
    var arr= [ 'Be understood easily, the first time','Feel confident speaking to locals','Get the job you are qualified for','Prepare for job interviews, meetings and presentations', 'Prepare for IELTs, PTE, medical exams and others!'];
  

    console.log(state.id)
 
    if (state.id ===5 ){


        return {
            id: state.id-i,
            sentence: 'Prepare for job interviews, meetings and presentations'
        }
      
    } else if(state.id >=0 && state.id<=4){
        
        return  {
            id: state.id-i,
            sentence: arr[state.id]
        }
    }
      
      else {
          return {
             
              sentence: "Correct your Australian Accent"
          }
      }


  }      


   


class Centreleft extends React.Component{
constructor(props){
    super(props)

    this.state={ 
        sentence:"Correct your Australian Accent",
        id:0
    }
    this.handleRight=this.handleRight.bind(this);
    this.handleLeft=this.handleLeft.bind(this);
}


handleLeft(){
    this.setState(left)
}

handleRight(){
    this.setState(right)
}
           
    
render(){
    const {sentence}=this.state;
 

return(
    
    <div className="container">
        <div className="row ">
            <div className="col">
                <span className="img-quote">How will Accent Training help you?</span>
                <span className="img-icon1"></span>
                <span className="img-icon2"></span>
            </div>
                 
                 
             <div className="col slider"> 
                <ol className="list ">
                 <li  className="slider-item"></li>
                 <li  className="slider-item">{sentence}</li>
                 <li  className="slider-item">{sentence}</li>
                 <li  className="slider-item">{sentence}</li>
                 <li  className="slider-item">{sentence}</li>
                </ol>
                   
                <button className="slider-button" 
                style={{outline: "none"}}
                onClick={this.handleLeft}
                > <AiOutlineCaretLeft />
                </button>
                <button className="slider-button" 
                style={{outline: "none"}}
                onClick={this.handleRight}
                > <AiOutlineCaretRight />
                </button>
               
               
    
                    
                    
            </div> 
               
             
               
               
    
        </div> 
        
    </div>
      )
     }
    }
  
    
  
   
     

      
      

     
   
    
   

     
 
    



                      
     
    
 
  




export default Centreleft;
        



 
       

        
    

    
       
 
            
          
                     

         
                 
        
          
            
          
        
    
   

      
       

     

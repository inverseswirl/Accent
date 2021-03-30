import React from 'react';


const Homecontent =()=>{
    const arr=[ 'Correct your English Pronunciation ','Correct your Australian Accent','Be understood easily, the first time','Feel confident speaking to locals','Get the job you are qualified for','Prepare for job interviews, meetings and presentations', 'Prepare for IELTs, PTE, medical exams and others!'];

    return(


        <div className="home-content">
        <h1 >At Pronounce It, you will: </h1>
        <ul className="list">
            {
              arr.map((item)=>{
              return <li key={item} className="slider-item">{item}</li>
              })
            }
        </ul>
        </div>
    )
}
export default Homecontent ;
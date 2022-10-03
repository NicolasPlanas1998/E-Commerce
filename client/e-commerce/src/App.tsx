import React, { useEffect, useState } from 'react'
import './App.css';


function App() {

  const [info, setInfo] =useState([])

  useEffect(()=>{
    try {
      fetch("http://localhost:3080/api")
      .then(res=> res.json())
      // .then(data=> {setInfo(data)})
      .then(data=> console.log(data))
      
    } catch (error) {
      console.log("err");
      
    }
    
  },[])
  
  console.log(info);
  

  return (
    <div className="App">
    {info.length?
      info.map(el=>(
        <h1>{el}</h1>
      ))
    :
    <h1>Cargando...</h1>
    
    }
  
  </div>
)}

export default App
import React,{useState,useEffect} from 'react'
import axios from "axios"
import "./App.css"
const App = () => {
  const[print,update]=useState("hiii")
  const kuku=()=>
  {
    axios
    .post("http://localhost:8000/kuku", {
      firstname: "Bhawishya singh",
    })
    .then(function (response) {
      update(response.data)
    })
    .catch((error)=>
    {
      console.log(error)
    })
  }
  useEffect(()=>
  {

  },[])
  return (
    <>
    <div className='App'>
  
    <div > {print}</div>
   
    <button onClick={kuku}>click me</button>
    </div>
    </>
  )
}

export default App
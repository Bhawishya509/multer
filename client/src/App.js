import React,{useState,useEffect} from 'react'
import axios from "axios"
import "./App.css"
const App = () => {
  const[data,updatedata]=useState({
    image:"",
    getting:""
  })

  const check=(e)=>
  
  {
    e.preventDefault()
     const fromdata=new FormData();
    fromdata.append("values",data.image)
    axios.post('http://localhost:8000/kuku',fromdata)
    .then(function (response) {
      updatedata((datas)=>
      {
        let c=`http://localhost:8000/image/${response.data}`
         datas.getting=c;
         return {...datas}

      })
      
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  const change=(e)=>
  {
    let b=e.target.files[0];
    updatedata((datas)=>
    {
      datas.image=b;
      return{...datas}

    })
  }
  
  useEffect(()=>
  {

  },[])
  console.log(data.getting)
  return (
    <>
    <img style={{height:"100px",width:"100px"}} src={data.getting} alt=""/>
    <form method='post' onSubmit={check} encType="multipart/form-data">
    <input type="file"name="image" onChange={change}/>
    <button type="submit" className="btn btn-success">Submit</button>
    <img src="{responses}" style={{height:"100px",weight:"100px"}} alt=""></img>
  </form>
    </>
  )
}

export default App
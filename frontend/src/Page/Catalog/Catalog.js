import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
const Catalog = ()=>{

  const [isLoading, setIsLoading] = useState(false);
  const [Note, setNote] = useState([]);

  useEffect(() => {
    getNote()
  },[])

  let getNote = async () => {
    let response = await fetch('http://127.0.0.1:8000/Image/')
    let data = await response.json().catch(err=>{console.log(err)})
    setNote(data)
    setIsLoading(false);
  }

    return(
      <div style={{width:'100%',alignContent:'center',textAlign:'center',minHeight:'80vh'}}>
        {isLoading ? (
        <div>Loading ...</div>
        ) : (
        Note.map((data) => (
        <a href={data.topic_link}>
          <img src={`${data.images}`} style={{borderRadius:'30px',maxWidth:'200px',padding:'3px 5px'}}></img>
        </a>    
        ))
        )}
      </div>
    )
}

export default Catalog
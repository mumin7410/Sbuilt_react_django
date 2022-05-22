import React, { useState,useEffect } from 'react';
import { Link ,useParams,useSearchParams} from 'react-router-dom';
import './style.css'
import Button from 'react-bootstrap/Button';
const Catalog = ()=>{

  const [isLoading, setIsLoading] = useState(false);
  const [Note, setNote] = useState([]);
  const [Type, setType] = useState('all');
  let {id} = useParams()

  useEffect(() => {
    getNote()
  },[])

  let getNote = async () => {
    let response = await fetch(`http://127.0.0.1:8000/Image/all`)
    let data = await response.json().catch(err=>{console.log(err)})
    setNote(data)
    setIsLoading(false);
  }


    return(
      <>
      <div style = {{textAlign:'center'}}>
      <Button variant="outline-secondary" style={{margin:'10px 4px'}} onClick={()=>{setType('all')}}>All</Button>
      <Button variant="outline-secondary" style={{margin:'10px 4px'}} onClick={()=>{setType('TV')}}>TV</Button>
      <Button variant="outline-secondary" style={{margin:'10px 4px'}} onClick={()=>{setType('Kitchen')}}>Kitchen</Button>
      <Button variant="outline-secondary" style={{margin:'10px 4px'}} onClick={()=>{setType('Wardrobe')}}>Wardrobe</Button>
      </div>
      <div style={{width:'100%',alignContent:'center',textAlign:'center',minHeight:'80vh'}}>
        {Note.map((data) => {
        if(data.Category == Type){
        return(
        <a href={data.topic_link}>
          <img src={`${data.images}`} style={{borderRadius:'30px',maxWidth:'200px',padding:'3px 5px'}}></img>
        </a>    
        )
        } else if(Type == 'all'){
          return(
            <a href={data.topic_link}>
              <img src={`${data.images}`} style={{borderRadius:'30px',maxWidth:'200px',padding:'3px 5px'}}></img>
            </a>  
            )
        }
        })}
      </div>
      </>
    )
}

export default Catalog
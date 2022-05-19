import React, { useState,useEffect } from "react";
import StackGrid from "react-stack-grid";
import { Column ,Title} from "./Des.element";
import { IoChevronBack } from 'react-icons/io5';
import { Link } from 'react-router-dom'
import './style.css'
const Desc = () => {
    const style = {
        row:{
            display:'flex',
            flexWrap:'wrap',
            // height:'100vh',
            padding:'10px 10px 8px',
            fontFamily:'Prompt'
        },
    }
      const [Note, setNote] = useState([]);

      useEffect(() => {
        getNote()
        console.log('count')
      },[])
    
      let getNote = async () => {
        let response = await fetch('http://127.0.0.1:8000/blogs/')
        let data = await response.json()
        setNote(data)
      }

    return(
        <>
        <Link to={'/catalog'}>
            <div className="Backbtn">
                <IoChevronBack />
            </div>
        </Link>
        <div className="Descpage" style={style.row}>
                <Column className="column">
                    <img src="https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg" style={{width:'100%', borderRadius:'18px'}}></img>
                </Column>
                <Column>
                <Title>
                <h3>Title</h3>
                <span style={{fontSize:'10px'}}>@18/3/2022</span>
                </Title>
                <br />
                <span style={{fontSize:'13px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</span>
                </Column>
        </div>

        <div style={{width:'100%',alignContent:'center',textAlign:'center'}}>
          {Note.map((data,index) => (
            <img src={`${data.Preview_img}`} style={{borderRadius:'30px',maxWidth:'200px',padding:'3px 5px'}}></img>
          ))} 
        </div>
        </>
    )
}

export default Desc;
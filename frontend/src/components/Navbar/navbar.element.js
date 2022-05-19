import styled from 'styled-components'
import { Container } from '../../globalStyles'
import { TiAnchorOutline } from "react-icons/ti"
import { Link } from 'react-router-dom';
import { AiTwotoneHome } from 'react-icons/ai'



export const Nav = styled.nav` //Nav section 
background:#ffff;
font-family: 'Prompt', sans-serif;
height:100px;
display:flex;
justify-content:center;
align-items:center;
font-size:1.1rem;
position:sticky;
top:0;
z-index:999;
border-bottom: 2px solid #DCDCDC;
`

export const Navbarcontainer = styled(Container)` //Navbar container 
    display:flex;
    font-family: 'Prompt', sans-serif;
    justify-content:space-between;
    /* height:80px; */
    
    ${Container}
`

export const Navlogo = styled(Link)` //Navlogo include text and icon 
 color:black;
 justify-content:flex-start;
 cursor:pointer;
 text-decoration:none;
 font-size:1.2rem;
 display:flex;
 align-items:center;
`


export const Navicon = styled(AiTwotoneHome)` //hmaberger icon 
 margin-right:0.5rem;
 color:#cecece;
`

export const HambergerIcon = styled.div` //hamberger icon container  
 display:none;
 @media screen and (max-width: 960px){
 position:absolute;
 right:0;
 /* top:0; */
 display:block;
 transform:translate(-100%,60%);
 font-size:1.6rem;
 cursor:pointer;
 }
`

export const NavMenu = styled.ul` //ul ตัวครอบทั้ง li a
display:flex;
font-family: 'Prompt', sans-serif;
/* align-items:center; */
text-align:center;
list-style:none; //เอาจุดดำออก 
justify-content:center;
@media screen and (max-width: 960px){ //หน้าจอต่ำกว่า 960px  
display:flex;
flex-direction:column;
width:100%;
height:100vh;
position:absolute;
top:80px; //top 80 px เพราะต้องเว้นระยะจาก nav ด้านบน 
left: ${({ click }) => (click ? 0 : '-100%')};
opacity:1;
transition:0.3s;
background:#ffff;
padding:5px;
}
`


export const NavItem = styled.li` //li ครอบ a 
height:80px;
border-bottom:2px solid transparent;
margin-right:5px;
&:hover{
    border-bottom:2px solid #cecece;
}
@media screen and (max-width:960px){
width:100%;
&:hover{
    border:none;
}
}
`
export const NavLink = styled(Link)`
color:black;
display:flex;
text-decoration:none;
align-items:center;
padding: 0.5rem 1rem;
height:100%;
@media screen and (max-width:960px){
    width:100%;
    padding:1rem;
    display:table;
    &:hover{
        color:#4b59f7;
        transition: 0.3s
    }
}
`

export const Button = styled.button` //Button 
border-radius: 18px;
background:#0467FB;
white-space:nowrap;
padding:${({ Big }) => Big ? '1.1em 1.1em' : '8px 20px'};
color:#fff;
font-size:${({ fontBig }) => fontBig ? '1.0em' : '16px'};
cursor:pointer;
outline:none;
border:none;
&:hover{
    transition:0.3s;
    background:#4B59F7;
}
@media screen and (max-width:960px){
    width:100%;
    
}
`

export const NavBtn = styled(Link)`
@media screen and (max-width:960px){
width:100%;
}
`
import styled from 'styled-components'
import { Container } from '../../globalStyles'

export const Info = styled.div`
color:#fff;
padding:60px 0;
margin: 10px;
border-radius: 20px;
background:${'white'};
font-family: 'Prompt', sans-serif;
`



export const InfoRow = styled.div`  //แนวนอน 
display:flex;
margin: 0 15px 15px 15px;
flex-wrap:wrap-reverse;
align-items:center;
justify-content:center ;
flex-direction:${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`
export const InfoColumn = styled.div` //แนวตั้ง
margin-bottom: 15px;
padding-right: 30px;
padding-left: 30px;
align-items:center ;
justify-content:center ;
flex:1;
max-width:50%; //กว้างสุดได้แค่ 50%
/* flex-basis:50%; //กำหนดความยาวเริ่มต้น //ความยาวของไอเทมใน container  */
@media screen and (max-width:960px){
    max-width:100%;
    flex-basis:100%; //ความยาวของไอเทมใน container พอจอเล็กแล้วก็เป็น 100%
    display:flex;
    justify-content:center;
}
`

export const TextWrapper = styled.div`
max-width:100%;
/* padding-top:0; */
/* padding-bottom:60px; */
align-items:center ;
padding:auto ;
justify-content:center ;
@media screen and (max-width:768px){
    padding-bottom:10px;
    text-align:center ;
}
`

export const Topline = styled.div`
color:#1c2237;
font-size:1.3vw;
line-height:48px;
letter-spacing:1.4px;
margin-bottom:16px;
@media screen and (max-width:768px){
    font-size: 1rem;
}
`

export const Heading = styled.div`
margin-bottom:24px;
font-size:2.9vw;
line-height:1.1;
color:#1c2237;
@media screen and (max-width:768px){
    font-size: 5vw;
}
`

export const Subtitle = styled.p`
color:#1c2237;
font-size:1.3vw;
line-height:24px;
max-width:440px;
margin-bottom:35px;
@media screen and (max-width:768px){
    font-size: 0.9rem;
}
`

export const ImageWrapper = styled.div`
max-width:100%;
text-align:center ;
/* justify-content:${({ start }) => (start ? 'flex-start' : 'flex-end')} ; */
`

export const Img = styled.img`
padding-right:0;
border:0;
max-width:60%;
vertical-align:middle;
display:inline-block;
/* max-height:400px; */
border-radius: 20px;
`
import styled from 'styled-components'
// import { Container } from '../../globalstylea'
import { Link } from 'react-router-dom'
import { FaMagento } from 'react-icons/fa'
import { AiTwotoneHome } from 'react-icons/ai'

export const FooterContainer = styled.div`
background:#FA6F6F;
margin-top:8vh ;
/* padding:0.2rem 0 0.9rem 0; */
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-family: 'Prompt';
`
export const FooterSubscription = styled.section`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
margin-bottom:24px;
color:#fff;
`

export const FooterSubheading = styled.p`
margin-bottom:24px;
font-size:24px;
`
export const FooterSubtext = styled.p`
font-size:20px;
margin-bottom:24px;
`

export const Form = styled.form`
display:flex;
align-items:center;
justify-content:center;
@media screen and (max-width:960px){
    flex-direction:column;
    width:80%;
}
`

export const FormInput = styled.input`
 padding: 10px 20px;
 border-radius: 18px;
 margin-right:10px;
 outline:none;
 border:none;
 font-size:16px;
 border:1px solid #fff;
@media screen and (max-width:960px){
    width:100%;
    margin:0px 0px 16px 0px;
}
`

export const FooterLinkContainer = styled.div`
    display:flex;
    max-width:1000px;
    width:100%;
    justify-content:center;
    margin-top:25px;
    @media screen and (max-width:960px){
        padding-top:32px;
    }
`
export const FooterLinkWrapper = styled.div`
    display:flex;
    @media screen and (max-width:960px){
        flex-direction:column;
    }
`

export const FooterLinkItem = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:16px;
    text-align:left;
    width:160px;
    box-sizing:border-box;
    color:#fff;
    @media screen and (max-width:420px){
        margin:0;
        padding:10px;
        width:100%;
    }
`
export const FooterLinkTitle = styled.h2`
    margin-bottom:16px;
`
export const FooterLink = styled(Link)`
    color:#fff;
    text-decoration:none;
    margin-bottom:0.5rem;
    &:hover{
        color:#0467fb;
        transition:0.3s
    }
`
export const SocialMedia = styled.section`
    max-width:1000px;
    width:100%;
`

export const SocialMediaWrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    max-width:1000px;
    margin:20px 0 0 0;
    @media screen and (max-width:960px){
        flex-direction:column;
    }
`
export const SocialLogo = styled(Link)`
    color:#fff;
    justify-content:center;
    cursor:pointer;
    text-decoration:none;
    display:flex;
    align-items:center;
    margin-bottom:16px;
`

export const SocialIcon = styled(AiTwotoneHome)`
    margin-right:10px;
    font-size:26px;
    margin-bottom:15px ;
`

export const WebsiteRight = styled.small`
    color:#fff;
    margin-bottom:16px;
`

export const SocialIcons = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:240px;
`

export const SocialIconLink = styled.a`
    color:#fff;
    font-size:24px;
`
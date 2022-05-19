import React from 'react'
import { Info, InfoColumn, InfoRow, TextWrapper, Topline, Heading, Subtitle, ImageWrapper, Img } from './Contact.element'
import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles'
import { Button } from '../../components/Navbar/navbar.element'
import Logos from '../../../src/Logos.png'
import ConImg from '../../../src/099-037-2612.gif'
const Contact = () => {
    return (
        <>
            <Info>
                <Container style={{background:'#FA6F6F',padding:'30px',borderRadius:'20px'}}>
                    <InfoRow imgStart={false}>
                        <InfoColumn>
                            <TextWrapper>
                                <Topline>ติดต่อเรา</Topline>
                                <Heading>ช่องทางการติดต่อ</Heading>
                                <Subtitle>สามารถติดต่อเราได้ตามช่องทางนี้</Subtitle>
                                {/* <Link to='#'>
                                    <Button primary={false} Big fontBig>เข้าชมแคตตาล้อก</Button>
                                </Link> */}
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImageWrapper>
                                <Img src={ConImg} alt='Image'/>
                            </ImageWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </Info>
        </>
    )
}

export default Contact;

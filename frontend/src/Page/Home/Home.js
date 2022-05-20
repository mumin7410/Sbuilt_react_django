import React from 'react'
import { Info, InfoColumn, InfoRow, TextWrapper, Topline, Heading, Subtitle, ImageWrapper, Img } from './Home.element'
import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles'
import { Button } from '../../components/Navbar/navbar.element'
import Logos from '../../../src/Logos.png'
import Contact from '../Contact/Contact'


const Home = () => {
    return (
        <>
            <Info lightBg = {true}>
                <Container>
                    <InfoRow imgStart={false}>
                        <InfoColumn>
                            <TextWrapper>
                                <Topline>เฟอร์นิเจอร์บิ้วอิน</Topline>
                                <Heading>ออกแบบเฟอร์นิเจอร์บิ้วอิน<br/>ตามไสตล์ที่คุณต้องการ</Heading>
                                <Subtitle>แคตตาล้อกรวมผลงานการบิ้วอินที่ผ่านมา</Subtitle>
                                <Link to='/Catalog/all'>
                                    <Button primary={false} Big fontBig>เข้าชมแคตตาล้อก</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImageWrapper>
                                <Img src={Logos} alt='Image'/>
                            </ImageWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </Info>
        <Contact />
        </>
    )
}

export default Home;

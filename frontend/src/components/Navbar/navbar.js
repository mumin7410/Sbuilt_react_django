import React,{ useState }  from 'react'
import {Button,Nav,Navbarcontainer,Navlogo,Navicon,HambergerIcon,NavMenu,NavItem,NavLink, NavBtn} from './navbar.element'
import { FaBars, FaTimes,  } from "react-icons/fa"
import { IconContext } from "react-icons";
import Logos from '../../../src/Logos.png'
const Navbar = () => {
    const [click, setclick] = useState(false)
    const clickedHandler = () => {
        return setclick(!click)
    }
    return (
        <>
            <IconContext.Provider value={{ color: "black", }}>
                <Nav>
                    <Navbarcontainer>
                        <Navlogo to='/'>
                            <img src={Logos} style={{ width: '80px' }} alt='' />
                        </Navlogo>
                        <HambergerIcon onClick={clickedHandler}>{click ? <FaTimes /> : <FaBars />}</HambergerIcon>
                        <NavMenu onClick={clickedHandler} click={click}>
                            <NavItem >
                                <NavLink to='/'>หน้าหลัก</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/catalog/all'>แคตตาล้อก</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/contact'>ติดต่อเรา</NavLink>
                            </NavItem>
                        </NavMenu>
                    </Navbarcontainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
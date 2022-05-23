import React,{ useState }  from 'react'
import {Button,Navs,Navbarcontainer,Navlogo,Navicon,HambergerIcon,NavMenus,NavItems,NavLink, NavBtn} from './navbar.element'
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
                <Navs>
                    <Navbarcontainer>
                        <Navlogo to='/'>
                            <img src={Logos} style={{ width: '80px' }} alt='' />
                        </Navlogo>
                        <HambergerIcon onClick={clickedHandler}>{click ? <FaTimes /> : <FaBars />}</HambergerIcon>
                        <NavMenus onClick={clickedHandler} click={click}>
                            <NavItems>
                                <NavLink to='/'>หน้าหลัก</NavLink>
                            </NavItems>
                            <NavItems>
                                <NavLink to='/catalog'>แคตตาล้อก</NavLink>
                            </NavItems>
                            <NavItems>
                                <NavLink to='/contact'>ติดต่อเรา</NavLink>
                            </NavItems>
                        </NavMenus>
                    </Navbarcontainer>
                </Navs>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
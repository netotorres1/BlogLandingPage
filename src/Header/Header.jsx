import React, { useState } from 'react'
import './style.css'
import { useRef } from 'react';
import LogoImg from './../data/logo.svg'
import IconArrow from './../data/icon-arrow-light.svg'
const Header = () => {

    const dropDownRef = useRef(null);
    const [isActiveProduct, setIsActiveProduct] = useState(false)
    const [isActiveCompany, setIsActiveCompany] = useState(false)
    const [isActiveConnect, setIsActiveConnect] = useState(false)
    const onClick1 = () => setIsActiveProduct(!isActiveProduct)
    const onClick2 = () => setIsActiveCompany(!isActiveCompany)
    const onClick3 = () => setIsActiveConnect(!isActiveConnect)

  return (
    <div className='Header'>
        <div className='HeaderContent'>
            <div className='HeaderMenu'>
                <div className='ContainerMenu'>
                <img className='logo' src={LogoImg}/>
                    <button onClick={onClick1} className='menu-button' >Product <img src={IconArrow}/></button>
                    <nav ref={dropDownRef} className={`menuProduct ${isActiveProduct ? 'active' : 'inactive'}`}>
                        <ul className='listProduct'>
                            <li>
                                <a>Overview</a>
                            </li>
                            <li>
                                <a >Pricing</a>
                            </li>
                            <li>
                                <a>Marketplace</a>
                            </li>
                            <li>
                                <a>Features</a>
                            </li>
                            <li>
                                <a >Integrations</a>
                            </li>
                        </ul>
                    </nav>
                    <button  onClick={onClick2} className='menu-button' >Company <img src={IconArrow}/></button>
                    <nav ref={dropDownRef} className={`menuCompany ${isActiveCompany ? 'active' : 'inactive'}`}>
                        <ul className='listProduct'>
                            <li><a>About</a></li>
                            <li><a>Team</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Careers</a></li>
                        </ul>
                    </nav>
                    <button  onClick={onClick3} className='menu-button' >Connect <img src={IconArrow}/></button>
                    <nav ref={dropDownRef} className={`menuConnect ${isActiveConnect ? 'active' : 'inactive'}`}>
                        <ul className='listProduct'>
                            <li><a >Contact</a></li>
                            <li><a>Newsletter</a></li>
                            <li><a>Linkedin</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='HeaderLogin'>
                    <a href='#' className='HeaderLoginbtn'>Login</a>
                    <a href='#' className='HeaderLoginbtnSingUp'>Sign Up</a>
                </div>
            </div>
                
            <div className='HeaderText'>
                <h1 className='HeaderTexth1'>A modern publishing platform</h1>
                <p className='HeaderTextp'>Grow your audience and build your online brand</p>
                <div className='HeaderButton'>
                <button className='HeaderButtonFree'>Start for Free</button>
                <button className='HeaderButtonLearn'>Learn More</button>
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default Header
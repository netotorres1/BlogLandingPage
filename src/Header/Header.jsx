import React, { useState } from 'react'
import './style.css'
import { useRef } from 'react';
import LogoImg from './../data/logo.svg'
import IconArrow from './../data/icon-arrow-light.svg'
import Hamburguer from './../data/icon-hamburger.svg'
import IconMenu from './../data/icon-arrow-dark.svg'
const Header = () => {

    const dropDownRef = useRef(null);
    const [isActiveProduct, setIsActiveProduct] = useState(false)
    const [isActiveCompany, setIsActiveCompany] = useState(false)
    const [isActiveConnect, setIsActiveConnect] = useState(false)
    const [isActiveMenu, setIsActiveMenu] = useState(false)

    const [isActiveSubMenuProcut, setIsActiveSubMenuProcut] = useState(false)
    const [isActiveSubMenuCompany, setIsActiveSubMenuCompany] = useState(false)
    const [isActiveSubMenuConnect, setIsActiveSubMenuConnect] = useState(false)

    const onClick1 = () => setIsActiveProduct(!isActiveProduct)
    const onClick2 = () => setIsActiveCompany(!isActiveCompany)
    const onClick3 = () => setIsActiveConnect(!isActiveConnect)
    const onClick4 = () => setIsActiveMenu(!isActiveMenu)

    const onClickSubMenuCompany = () => setIsActiveSubMenuCompany(!isActiveSubMenuCompany)
    const onClickSubMenuProduct = () => setIsActiveSubMenuProcut(!isActiveSubMenuProcut)
    const onClickSubMenuConnect = () => setIsActiveSubMenuConnect(!isActiveSubMenuConnect)

  return (
    <div className='Header'>
        <div className='HeaderContent'>
        <div ref={dropDownRef} className={`MenuResposivo ${isActiveMenu ? 'active' : 'inactive'}`}>
            <button className='MenuBtn'>Product <img alt='' src={IconMenu}  onClick={onClickSubMenuProduct} /></button>
            <div ref={dropDownRef} className={`SubMenuProduct ${isActiveSubMenuProcut ? 'active' : 'inactive'}`}>
                <button className='subMenuItem'>Overview</button>
                <button className='subMenuItem'>Pricing</button>
                <button className='subMenuItem'>Marketplace</button>
                <button className='subMenuItem'>Features</button>
                <button  className='subMenuItem'>Integrations</button >
            </div>
            <button className='MenuBtn'>Company <img alt='' src={IconMenu} onClick={onClickSubMenuCompany} /></button>
            <div ref={dropDownRef} className={`SubMenuCompany ${isActiveSubMenuCompany ? 'active' : 'inactive'}`}>
                <button  className='subMenuItem'>About</button >
                <button  className='subMenuItem'>Team</button >
                <button  className='subMenuItem'>Blog</button >
                <button  className='subMenuItem'>Careers</button >
            </div>
            <button className='MenuBtn'>Connect <img alt='' src={IconMenu}  onClick={onClickSubMenuConnect} /></button>
            <div ref={dropDownRef} className={`SubMenuConnect ${isActiveSubMenuConnect ? 'active' : 'inactive'}`} >
                <button  className='subMenuItem'>Contact</button >
                <button  className='subMenuItem'>Newsletter</button >
                <button  className='subMenuItem'>Linkedin</button >
            </div>
            <hr />
            <button className='MenuBtn'>Login </button>
            <button className='MenuBtnSignUp'>Sign Up</button>
        </div>
        <img className='logoMobile' alt='' src={LogoImg} />
        <img className='iconHB' onClick={onClick4} src={Hamburguer}  />
            <div className='HeaderMenu'>
                <div ref={dropDownRef}  className={`menu ${isActiveMenu ? 'active' : 'inactive'}`}>
                <img className='logo' alt='' src={LogoImg} />
                    <button onClick={onClick1} className='menu-button' >Product <img alt='' src={IconArrow}/></button>
                    <nav ref={dropDownRef} className={`menuProduct ${isActiveProduct ? 'active' : 'inactive'}`}>
                        <ul className='listProduct'>
                            <li  className='listProductitem'>
                                <button >Overview</button >
                            </li>
                            <li  className='listProductitem'>
                                <button  >Pricing</button >
                            </li>
                            <li className='listProductitem' >
                                <button >Marketplace</button >
                            </li>
                            <li className='listProductitem'>
                                <button >Features</button >
                            </li >
                            <li className='listProductitem'>
                                <button  >Integrations</button >
                            </li>
                        </ul>
                    </nav>
                    <button  onClick={onClick2} className='menu-button' >Company <img alt='' src={IconArrow}/></button>
                    <nav ref={dropDownRef} className={`menuCompany ${isActiveCompany ? 'active' : 'inactive'}`}>
                        <ul className='listProduct'>
                            <li className='listProductitem'><button >About</button ></li>
                            <li className='listProductitem'><button >Team</button ></li>
                            <li className='listProductitem'><button >Blog</button ></li>
                            <li className='listProductitem'><button >Careers</button ></li>
                        </ul>
                    </nav>
                    <button  onClick={onClick3} className='menu-button' >Connect <img alt='' src={IconArrow}/></button>
                    <nav ref={dropDownRef} className={`menuConnect ${isActiveConnect ? 'active' : 'inactive'}`}>
                        <ul className='listProduct'>
                            <li className='listProductitem'><button  >Contact</button ></li>
                            <li className='listProductitem'><button >Newsletter</button ></li>
                            <li className='listProductitem'><button >Linkedin</button ></li>
                        </ul>
                    </nav>
                </div>
                <div className='HeaderLogin'>
                    <button className='HeaderLoginbtn'>Login</button >
                    <button className='HeaderLoginbtnSingUp'>Sign Up</button >
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
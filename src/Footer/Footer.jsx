import React from 'react'
import Icon from './../data/logo.svg'
import './style.css'

const Footer = () => {
  return (
        <div className='ContainerFooter'>
            <div className='FooterContent'>
            <img className='FooterIcon' alt='' src={Icon} />
            <div className='ContainerFooterList'>
                <ul className='listProduct'>
                        <li>
                            <b>Product</b>
                        </li  >
                        <li  className='listProductitem'>
                            Overview
                        </li>
                        <li  className='listProductitem'>
                            Pricing
                        </li>
                        <li  className='listProductitem'>
                            Marketplace
                        </li>
                        <li  className='listProductitem' >
                            Features
                        </li>
                        <li  className='listProductitem'>
                        Integrations
                        </li>
                </ul>
                <ul className='listProduct'>
                    <li><b>Company</b></li>
                    <li  className='listProductitem'>About</li>
                    <li  className='listProductitem'>Team</li>
                   <li  className='listProductitem'>Blog</li>
                    <li>Careers</li>
                </ul>
                <ul className='listProduct'>
                    <li><b>Connect</b></li>
                    <li  className='listProductitem'>Contact</li>
                    <li  className='listProductitem'>Newsletter</li>
                    <li  className='listProductitem'>Linkedin</li>
                </ul>

            </div>
            </div>
        </div>
  )
}

export default Footer
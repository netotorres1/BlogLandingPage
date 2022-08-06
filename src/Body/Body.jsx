import React from 'react'
import './style.css'
import EditorDesktop from './../data/illustration-editor-desktop.svg'
import EditorLaptop from './../data/illustration-laptop-desktop.svg'
import EditorMobile from './../data/illustration-editor-mobile.svg'
import EditorLaptopMobile from './../data/illustration-laptop-mobile.svg'
import Phones from './../data/illustration-phones.svg'

const Body = () => {
  return (
    <div className='contentMain'>
        <section className='Main'>
            <div>
            <h1 className='MainTitle'>Designed for the future</h1>
            <img className='editorMobile' alt='' src={EditorMobile} />
                <div className='MainP'>
                    <h2 className='MainPTitle'>Introducing an extensible editor</h2>
                    <p  className='MainPp'>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                        change the looks of a blog.</p>
                </div>
                <div className='MainP'>
                    <h2 className='MainPTitle'>Robust content management</h2>
                    <p className='MainPp'>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                </div>
            </div>
            <img className='MainImg' alt='' src={EditorDesktop} />
        </section>
        <section className='Phone'>
            <div className='PhonesbackgrounBlue'>
                <div className='PhonesContent'>
                    <img className='PhonesImg' alt='' src={Phones}/>
                    <div className='PhonesP'>
                        <h1 className='PhonesPTitle' >State of the Art Infrastructure</h1>
                        <p className='PhonesPp'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                    </div>  
                </div>
            </div>
        </section>
        <section className='Laptop'>
            <div className='LaptopContainer'>
                <img className='LaptopMobile' alt='' src={EditorLaptopMobile} />
                <div className='LaptopP'>
                    <h2 className='LapttopPTitle'>Free, open, simpler</h2>
                    <p  className='LaptopP'>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                    features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                    and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                </div>
                <div className='LaptopP'>
                    <h2 className='LapttopPTitle'>Powerful tooling</h2>
                    <p className='LaptopP'> Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                        capable of producing even the most complicated sites.</p>
                </div>
            </div>
            <img className='laptopimg' alt='' src={EditorLaptop} />
        </section>
    </div>
  )
}

export default Body
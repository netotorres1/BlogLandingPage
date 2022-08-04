import React from 'react'
import './style.css'
import EditorDesktop from './../data/illustration-editor-desktop.svg'
import Phones from './../data/illustration-phones.svg'

const Body = () => {
  return (
    <div>
        <section className='Main'>
            <div>
            <h1 className='MainTitle'>Designed for the future</h1>
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
            <img className='MainImg' src={EditorDesktop} />
        </section>
        <section>
            <div className='PhonesbackgrounBlue'>
                <div className='PhonesContent'>
                    <img className='PhonesImg' src={Phones}/>
                    <div className='PhonesP'>
                        <h1 className='PhonesPTitle' >State of the Art Infrastructure</h1>
                        <p className='PhonesPp'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                    </div>  
                </div>
            </div>
        </section>
    </div>
  )
}

export default Body
import React, { useEffect, useRef, useState } from 'react'
import { navLinks } from '../constants'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const NavBar = ({media}) => {
    const [scrolled, setScrolled] = useState(false);
    const open = useRef(null);
    const close = useRef(null);
    const menuContainer = useRef(null);

    const {isMobile} = media

    useGSAP((context, contextSafe)=>{

        if(!isMobile) return

        const tl = gsap.timeline()

        tl.to('#menu', {
            right: 0,
            duration: 0.5,
        })
        .to('#open',{
            opacity: 0,
            duration: 0
        })

        // Animate the menu items
        // tl.from("#menu li", {
        //     x: 100,
        //     duration: 0.5,
        //     opacity: 0,
        //     stagger: 0.25,
        // });

        // Animate the close icon
        // tl.from("#menu button", {
        //     opacity: 0,
        //     stagger: 0.5,
        // });

        // Pause the timeline initially
        tl.pause();

        const openMenu = contextSafe(() => {
            tl.play();
        });

        const closeMenu = contextSafe(()=>{
            tl.reverse();
        })

        close.current.addEventListener('click',closeMenu);
        open.current.addEventListener('click', openMenu);
        menuContainer.current.addEventListener('click',closeMenu);

        return () => {
            open.current.removeEventListener('click', openMenu);
            close.current.removeEventListener('click', closeMenu);
            menuContainer.current.removeEventListener('click', closeMenu);
        };

    },[])
    

    useEffect(()=>{
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
           if(isScrolled) setScrolled(true);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    },[])

  return (
    <header className={`navbar ${scrolled ? 'scrolled': 'not-scrolled'}`}>
        <div id="menu" ref={menuContainer} className="absolute top-0 -right-200 z-100 bg-black-50/75">
            <button id="close" ref={close}>
                <XMarkIcon className="absolute w-10 top-2 right-2" />
            </button>
            <nav className="h-[20vh] w-[30vw] flex flex-col justify-center mt-5 me-10 ms-2 mb-2">
                <ul>
                    {navLinks.map(({link, name})=>(
                        <li key={name} className="flex items-center justify-center px-2 mt-3 bg-black-50 border-black-100 border-1 rounded-2xl group active:bg-black-200">
                            <a href={link} className="w-full h-full text-center border-black-100 border-1 rounded-2xl focus:bg-black-200">
                                <span className="group-hover:text-blue-50 group-active:text-blue-50">{name}</span>
                                <span className="underline"/>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
        <div className="inner">
            <a className="logo" href="#new-hero">
                Lamoon Music
            </a>
            <nav className="desktop">
                <ul>
                    {navLinks.map(({link, name})=>(
                        <li key={name} className="group">
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline"/>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            {isMobile &&
                // <a href="#social-media" className="contact-btn group">
                //     <div className="inner">
                //         <span>My Socials</span>
                //     </div>
                // </a>
                <button id="open" ref={open} className="h-full w-10">
                    <Bars3Icon/>
                </button>
                
            }
            {/* <a href="#contact" className="contact-btn group" >
                <div className="inner">
                    <span>Contact me</span>
                </div>
            </a> */}
        </div>
    </header>
  )
}

export default NavBar
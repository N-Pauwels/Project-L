import { useGSAP } from '@gsap/react'
import MoonExperience from '../components/HeroModels/MoonExperience.jsx'
import AboutMe from './AboutMe.jsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../components/Button.jsx'

gsap.registerPlugin(ScrollTrigger);

const NewHero = ({ready, setReady}) => {
    const screenWidth = window.screen.width;
    useGSAP(()=>{
        const tl = gsap.timeline({scrollTrigger:{
            trigger:"#new-hero",
            start: "top 5%",
            end:"15% 5%",
            scrub: true,
        }})
        const tl2=gsap.timeline({scrollTrigger:{
            trigger:"#new-hero",
            start: "30% top",
            end:"50% top",
            scrub: true
        }})

        tl.to("#text-la",{x:-750})
        .to("#text-moon",{x:750},'<')

        tl2.from("#text-la-head",{x:-750,y:-200})
        .from("#text-moon-head",{x:screenWidth+100,y:-200},'<')

        gsap.to(window,{
            ease: 'power2.inOut',
            scrollTrigger:{
                trigger:"#new-hero",
                start:"top 5%",
                snap:{snapTo:[0,0.52,1]}
            }
        })
    },[])

  return (
    <section id="new-hero" className="relative h-[200vh]">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background"/>
        </div>
        <div className="text-7xl sm:text-9xl">
            <div id="text-la" className="absolute top-40 left-5 sm:left-50 flex flex-row">
                <h1 className="cinzel-epic">LAMOON</h1>
                <div className="absolute right-1 bg-white w-full h-[90%] top-1 moon-cover-right"/>
                <div className="absolute bg-black w-full h-full moon-cover-right"/>
            </div>
            <div id="text-moon" className="absolute bottom-[60%] md:bottom-[57%] xl:bottom-[60%] right-5 sm:right-10 flex flex-row">
                <h1 className="cinzel-epic">LAMOON</h1>
                <div className="absolute left-2 bg-white w-full h-[90%] top-1 moon-cover-left"/>
                <div className="absolute bg-black w-full h-full moon-cover-left"/>
            </div>
        </div>
        <div className="sticky top-0 z-10 xl:mt-20 mt-32 md:h-dvh h-[80vh] flex xl:items-center items-start justify-center">
            <MoonExperience
                ready={ready}
                setReady={setReady}
            />
        </div>
        <Button
            className="absolute bottom-[60%] w-100 h-12"
            id="button"
            text="See more below"
            scrollId='about-me'
            offset={-window.innerHeight * 0.01}
        />
        <AboutMe/>
    </section>
  )
}

export default NewHero
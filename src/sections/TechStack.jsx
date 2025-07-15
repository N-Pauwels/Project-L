import { useMemo } from 'react'
import TitleHeader from '../components/TitleHeader.jsx'
import { techStackIcons } from '../constants'
import TechIcon from '../components/models/TechLogos/TechIcon.jsx'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TechStack = () => {

    useGSAP(()=>{
        gsap.fromTo('.tech-card',{
            y: 50,
            opacity: 0
        },{
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2,
            scrollTrigger: {
                trigger:'#social-media',
                start: 'top center'
            }
        })
    },[])

  return (
    <div id="social-media" className="flex-center px-5 md:px-10">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader
                title="Social Media"
                sub="Where you can follow me"
            />
            <div className={`tech-grid xl:mx-80 xl:grid-cols-3`}>
                {techStackIcons.map((icon,index)=>(
                    <div key={index} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="tech-card-animated-bg"/>
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <TechIcon
                                    model={icon}
                                />
                            </div>
                            <div className="padding-x w-full">
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>   
        </div>
    </div>
  )
}

export default TechStack
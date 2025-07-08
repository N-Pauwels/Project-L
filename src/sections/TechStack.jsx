import { useMemo } from 'react'
import TitleHeader from '../components/TitleHeader.jsx'
import { techStackIcons } from '../constants/index.js'
import TechIcon from '../components/models/TechLogos/TechIcon.jsx'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TechStack = () => {
    const cols = useMemo(()=> techStackIcons.length,[techStackIcons])

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
                trigger:'#skills',
                start: 'top center'
            }
        })
    },[])

  return (
    <div id="skills" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader
                title="Social Media"
                sub="Where you can follow me"
            />
            <div className={`tech-grid xl:grid-cols-${cols} xl:mx-${45*(5 % Math.min(cols,5))}`}>
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
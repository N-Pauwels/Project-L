import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import TitleHeader from '../components/TitleHeader'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = ({media}) => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    const {isMobile, isSM, isMD} = media
    const isSmall = isMobile || isSM ||isMD;
    
    useGSAP(()=>{
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        projects.forEach((card, index)=>{
            gsap.fromTo(card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1.5
            }
        );
    },[])

  return (
    <div id="work" ref={sectionRef} className="app-showcase min-h-screen">
        <div className="w-full">
        <TitleHeader
                title="A Taste of my Music"
                sub="Where to listen"
            />
            <div className="showcaselayout mt-20 rounded-xl bg-black-50 border-white border-5 p-5 xl:p-20">
                {/* LEFT */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="project box-content">
                        {isSmall && 
                            <div className="text-content text-center xl:text-left">
                                <h2>Check out my EP on spotify.</h2>
                                <p className="text-white-50 mb-10 md:text-xl">
                                    You might just like it.
                                </p>
                            </div>
                        }
                        <div className="image-wrapper bg-[#ffe7eb] md:bg-transparent">
                            <iframe
                                className="border-5 rounded-xl box-content"
                                src="https://open.spotify.com/embed/album/2aFjv03gpQkOouFSmeYKcH?utm_source=generator"
                                width="100%"
                                height="400"
                                allowFullScreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy">
                            </iframe>
                        </div>
                        {/* <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Ryde" />
                        </div> */}
                        {!isSmall &&
                            <div className="text-content text-center xl:text-left">
                                <h2>Check out my EP on spotify.</h2>
                                <p className="text-white-50 md:text-xl">
                                    You might just like it.
                                </p>
                            </div>
                        }
                    </div>
                </div>
                {/* RIGHT */}
                <div className="project-list-wrapper mt-20 xl:mt-0">
                    <div className="project box-content" ref={project2Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <iframe
                                className="border-5 rounded-xl box-content"
                                src="https://open.spotify.com/embed/track/1wu1Cabk0tcuLkI0FtuHDj?utm_source=generator&theme=0"
                                allowFullScreen=""
                                height="152"
                                width="100%"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy">
                            </iframe>
                        </div>
                        <h2 className="text-center xl:text-left">My most popular song</h2>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffe7eb] mt-10 xl:mt-0">
                            <iframe
                                className="border-5 rounded-xl box-content"
                                src="https://open.spotify.com/embed/track/7wQw9GBdprURKVtMj7jGxA?utm_source=generator&theme=0"
                                allowFullScreen=""
                                height="152"
                                width="100%"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy">
                            </iframe>
                        </div>
                        <h2 className="text-center xl:text-left">My favourite song</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    
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
            <div className="showcaselayout">
                {/* LEFT */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <iframe
                        className="border-2 rounded-xl h-full"
                        src="https://open.spotify.com/embed/album/2aFjv03gpQkOouFSmeYKcH?utm_source=generator"
                        // width="100%"
                        // height="100%"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy">
                    </iframe>
                    {/* <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde" />
                    </div> */}
                    <div className="text-content">
                        <h2>Check out my EP on spotify.</h2>
                        <p className="text-whitee-50 md:text-xl">
                            You might just like it.
                        </p>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="project-list-wrapper">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-amber-50">
                            <iframe
                                className="border-5 rounded-xl box-content"
                                src="https://open.spotify.com/embed/track/1wu1Cabk0tcuLkI0FtuHDj?utm_source=generator&theme=0"
                                allowfullscreen=""
                                height="152"
                                width="100%"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy">
                            </iframe>
                        </div>
                        <h2>My most popular song</h2>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <iframe
                                className="border-5 rounded-xl box-content"
                                src="https://open.spotify.com/embed/track/7wQw9GBdprURKVtMj7jGxA?utm_source=generator&theme=0"
                                allowfullscreen=""
                                height="152"
                                width="100%"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy">
                            </iframe>
                        </div>
                        <h2>My favourite song</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection
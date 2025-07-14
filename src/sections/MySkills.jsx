import GlowCard from '../components/GlowCard'
import TitleHeader from '../components/TitleHeader'
import { skillCards } from '../constants'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const MySkills = () => {

    useGSAP(()=>{
        gsap.utils.toArray('.timeline-card').forEach((card)=>{
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                }
            })
        })
        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            scaleY: 0,
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                scrub: true
            }
        })

        gsap.to('#back-image',{
            x:300,
            ease: 'power2.inOut',
            scrollTrigger:{
                trigger:'#my-skills',
                start:'10% 80%',
                end: '30% 80%',
                scrub:true,
            }
        })


        gsap.utils.toArray('.expText').forEach((text)=>{
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 60%',
                }
            })
        })
    },[])


  return (
    <section id="my-skills" className="relative w-full top-0 md:-mt-[24vw] mt-20 section-padding xl:px-0">
        <div id="back-image" className="about-image-back memory-card mb-20">
            <div id="inner-card" className="card__inner rounded-3xl border-4 border-amber-500 size-full">
                <div id="card-0" className="card__face card__face--front size-full">
                    <img
                        src="/images/about.webp"
                        alt="about image"
                        className=" absolute left-0 top-0 size-full object-cover"
                    />
                </div>
                <div className="card__face card__face--back size-full">
                    <img
                        src="/images/cards/singer.png"
                        alt="singer"
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>
                {/* <div id="card-1" className="card__face card__face--front size-full">
                    <img
                        src="/images/cards/pianist.png"
                        alt="singer"
                        className="absolute left-0 top-0 size-full object-cover opacity-0"
                    />
                </div> */}
            </div>
        </div>
        <div className="w-full h-full md:px-20 px-5">
            <TitleHeader
                title="The Craft behind the Sound"
                sub="Where I shine"
            />
            <div className="mt-32 relative">
                <div className="relative z-50 xl:space-y-32 space-y-10">
                    {skillCards.map((card, index)=>(
                        <div key={index} id={`card-box-${index}`} className="exp-card-wrapper">
                            <div className="xl:w-2/6">
                                <GlowCard
                                    card={card}
                                    index={index}
                                >
                                    {/* <div>
                                        <img src={card.imgPath} alt={card.title} />
                                    </div> */}
                                </GlowCard>
                            </div>
                            <div className="xl:w-4/6">
                                <div className="flex items-start">
                                    <div className="timeline-wrapper">
                                        <div className="timeline"/>
                                        <div className="gradient-line w-1 h-full" />
                                    </div>
                                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                        <div className="timeline-logo">
                                            <img src={card.logoPath} alt="logo"/>
                                        </div>
                                        <div>
                                            <h1 className="font-semibold text-3xl">{card.title}</h1>
                                            {/* <p className="my-5 text-white-50">{card.date}</p>
                                            <p className="text-[#839cb5] italic">
                                                Responsibilities
                                            </p>
                                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                {card.responsibilities.map((responsibility, index) => (
                                                    <li key={index} className="text-lg">
                                                        {responsibility}
                                                    </li>
                                                ))}
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default MySkills
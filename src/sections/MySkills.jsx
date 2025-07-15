import GlowCard from '../components/GlowCard'
import TitleHeader from '../components/TitleHeader'
import { skillCards } from '../constants'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from "gsap/CustomEase";
import CardCarousel from "../components/CardCarousel"

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

const MySkills = () => {

    //you can use this function to get the gradient based on the constants file, but can't use it directly as a class since tailwind does not work with dynamically constructed classes, it only parses the source file for strings.

    function getGradient (arr){
        const reverse = arr.toReversed();
        const gradient = reverse.reduce((acc, el, index, array)=>{
            const {color} = el;
            const length = array.length;
            const percentage = (100 / length * (index + 1)).toFixed(2);
            let newStr = acc.concat(color,"_",percentage,"%");
            newStr = index + 1 === length ? newStr.concat("]") : newStr.concat(",");
            return newStr

        },"bg-linear-[0deg,rgba(69,222,196,0)_0%,")
        return gradient
    }

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
        gsap.from('.timeline', {
            transformOrigin: 'bottom',
            height:'100%',
            ease: CustomEase.create("custom", "M0,0 C0,0 0.279,0.253 0.551,0.525 0.695,0.669 0.766,0.89 0.85,0.982 0.896,1.032 1,1 1,1 "),
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top 80%',
                end: 'bottom center',
                scrub: true,
            }
        })

        gsap.to('#back-image',{
            x:350,
            ease: 'power2.inOut',
            scrollTrigger:{
                trigger:'#my-skills',
                start:'10% 80%',
                end: '30% 80%',
                scrub:true,
            }
        })
        //TODO: animation below causes staggering issues, check if can be solved in other way

        // gsap.to('#back-image',{
        //     marginBottom: -40,
        //     ease: 'power2.inOut',
        //     scrollTrigger:{
        //         trigger:'#my-skills',
        //         start:'80% center',
        //         end: 'bottom bottom',
        //         scrub: true
        //     }
        // })


        gsap.utils.toArray('.card-deck').forEach((_card, index)=>{
            gsap.to(`#inner-card-${index}`,{
                rotateY:'180deg',
                ease: 'slow',
                scrollTrigger:{
                    trigger:`#inner-card-box-${index}`,
                    scrub: true,
                    start: '-40% 562x',
                    end: '100% 562px',
                    snap: 1,
                }
            })
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
            <CardCarousel/>
        </div>
        <div className="w-full h-full md:px-20 px-5">
            <TitleHeader
                title="The Craft behind the Sound"
                sub="Where I thrive"
            />
            <div className="mt-50 relative">
                <div className="relative z-50 xl:space-y-32 space-y-10">
                    {skillCards.map((card, index, array)=>(
                        <div key={index} id={`card-box-${index}`} className="exp-card-wrapper">
                            <div  id={`inner-card-box-${index}`} className="xl:w-2/6 min-h-[296px]">
                                <GlowCard
                                    card={card}
                                    index={index}
                                >
                                </GlowCard>
                            </div>
                            <div className="xl:w-4/6">
                                <div className="flex items-start">
                                    <div className="timeline-wrapper">
                                        <div className="timeline"/>
                                        <div className="bg-linear-[0deg,rgba(69,222,196,0)_0%,#d2701b_16.67%,#cece45_33.33%,#62e0ff_50.00%,#36dc49_66.67%,#fd5c79_83.33%,#6d45ce_100.00%] w-1 h-full"/>
                                    </div>
                                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                        <div className={`timeline-logo ${card.className}`} >
                                        </div>
                                        <div>
                                            <h1 className="font-semibold text-3xl">{card.title}</h1>
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
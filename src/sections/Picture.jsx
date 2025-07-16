import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import MySkills from "./MySkills"

gsap.registerPlugin(ScrollTrigger)

const Picture = () => {
  useGSAP(()=>{
    const clipAnimation = gsap.timeline({scrollTrigger:{
      trigger:'#clip',
      start: 'top 25%',
      end:'+=800 center',
      scrub: true,
      pin: true,
      pinSpacing: true
    }})

    clipAnimation.from('.mask-clip-path',{
      width: '80vw',
      height:'80vh',
      borderRadius: 0,
      borderWidth: 0
    })
    .to('.mask-clip-path',{
      // opacity:0,
      duration:0
    },'>')
    .to('#back-image',{
      opacity:1,
      duration:0,
    },'<')

  },[])
  
  return (
    <div id="picture" className="relative min-h-screen w-screen">
      <div className="relative mb-8 mt-20 md:mt-36 flex flex-col items-center gap-5">
        <h2 className="font-cinzel text-xl">
          Welcome to my site
        </h2>
        <div className="md:mt-5 text-center text-4xl leading-[0.8] md:text-[6rem]">
          Discover my passion for music
        </div>
      </div>
      <div className="relative h-[50vh] z-20 w-screen flex items-center justify-center perspective-distant" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/images/about.webp"
            alt="about image"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
      {/* <MySkills/> */}
    </div>
  )
}

export default Picture
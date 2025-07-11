import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
import MoonLights from './MoonLights';
import Particles from './Particles';
import { Suspense, useEffect, useRef, useCallback } from 'react';
import Moon from './Moon';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Explosion from './Explosion';

gsap.registerPlugin(ScrollTrigger);

const MoonExperience = () => {
    // const moon = useRef()

    const moon = useCallback((node)=>{
            if (!node) return
            // console.log('Start:', moon.current.position.x)
            gsap.to(node.position,{  
                x: 12,
                z: -10,
                y:-2,
                scrollTrigger:{
                    trigger:'#new-hero',
                    start:'top 10% ',
                    scrub: true
                }
            })
    },[])

    useEffect(()=>{
        console.log("effect",moon.current);
    },[])

    const moonAbove = useMediaQuery({query: '(max-width: 1366px'});
    const isMobile = useMediaQuery({query: '(max-width: 1024px'});
    const moonFunc = () =>{
        if(isMobile){
            return {position:[0,0,0], scale:0.25}
        }
        else if(moonAbove) {
            return {position:[5,3,0], scale:0.35}
        }
        else{
            return {position:[-2,0,0], scale:0.35}
        }
    }
    const params = moonFunc()

  return (
    <Canvas
        camera={{position:[0,0,15], fov:45}}
    >
        <Suspense fallback={null}>
        <MoonLights/>
        <Particles count={100}/>
        <Moon
            ref={moon}
            position={params.position}
            scale={params.scale}
        />
        <Explosion/>
        </Suspense>
    </Canvas>
  )
}

export default MoonExperience
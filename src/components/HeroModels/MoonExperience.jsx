import { Canvas, useFrame, useThree } from '@react-three/fiber'
import MoonLights from './MoonLights';
import Particles from './Particles';
import { Suspense, useEffect, useRef, useCallback, useState } from 'react';
import Moon from './Moon';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Explosion from './Explosion';
import Loader from '../Loader';
import { Preload } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);


const MoonExperience = ({ready, setReady, media}) => {
    
    const {isMobile, isSM, isMD, isLG, isXL, is2XL} = media

    const moon = useCallback((node)=>{
            if (!node) return
            // console.log('Start:', moon.current.position.x)
            gsap.to(node.position,{  
                x: isMD? 4 : 12,
                z: -10,
                y: isMD? 0 : -2,
                scrollTrigger:{
                    trigger:'#new-hero',
                    start:'top 10% ',
                    scrub: true
                }
            })
    },[])

    const moonFunc = () =>{
        if(isMobile){
            return {position:[0,1.5,0], scale:0.25}
        }
        else if(isSM || isMD) {
            return {position:[0,1.9,0], scale:0.25}
        }
        else{
            return {position:[-2,0,0], scale:0.35}
        }
    }
    const params = moonFunc()

  return (
    <>
        <Canvas
            camera={{position:[0,0,15], fov:45}}
        >
            <Suspense>
            <MoonLights/>
            <Particles count={100}/>
            <Moon
                ref={moon}
                position={params.position}
                scale={params.scale}
                setReady={setReady}
            />
            <Explosion/>
            <Preload all />
            </Suspense>
        </Canvas>
    </>
  )
}

export default MoonExperience
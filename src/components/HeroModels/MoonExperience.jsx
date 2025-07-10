import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
import MoonLights from './MoonLights';
import Particles from './Particles';
import { Suspense } from 'react';
import Moon from './Moon';

const MoonExperience = () => {
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
            position={params.position}
            scale={params.scale}
        />
        </Suspense>
    </Canvas>
  )
}

export default MoonExperience
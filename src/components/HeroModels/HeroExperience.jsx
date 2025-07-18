import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';
import Particles from './Particles';
import { Suspense } from 'react';
import Moon from './Moon';

const HeroExperience = () => {
    const isTablet = useMediaQuery({query: '(max-width: 1024px'});
    const isMobile = useMediaQuery({query: '(max-width: 768px'});

  return (
    <Canvas
        camera={{position:[0,0,15], fov:45}}
    >
        <Suspense fallback={null}>
        {/* <OrbitControls
            makeDefault={false}
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
        /> */}
        <HeroLights/>
        <Particles count={100}/>
        <Moon
            position={[-2,5,-10]}
            scale={0.2}
        />
        <group
            scale={isMobile? 0.7 : 1}
            position={[0,-3.5,0]}
            rotation={[0, -Math.PI / 5, 0]}    
        >
            <Room/>
        </group>
        </Suspense>
    </Canvas>
  )
}

export default HeroExperience
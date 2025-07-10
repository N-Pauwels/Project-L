import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
        <ambientLight/>
        <primitive
         object={new THREE.RectAreaLight('#fff2cc', 8, 3, 2)}
         position={[1,3,4]}
         intensity={50}
         rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        />
    </>
  )
}

export default HeroLights
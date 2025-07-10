import { useTexture } from '@react-three/drei';
import * as THREE from 'three'

const Moon = (props) => {
    const moonTexture = useTexture('/models/moon/moon.jpg');
    const normalTexture = useTexture('/models/moon/normal.jpg')

    const sphere = new THREE.SphereGeometry(10,32,32)
    const moon = new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      })


  return (
    <group {...props} dispose={null}>
        <mesh
            geometry={sphere}
            material={moon}
        />
    </group>
  )
}

export default Moon
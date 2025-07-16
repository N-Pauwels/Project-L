import { useTexture } from '@react-three/drei';
import * as THREE from 'three'
import { forwardRef, useEffect, useRef, useState } from 'react';

const Moon = forwardRef(({setReady, ...props}, ref) => {
  
    const meshRef = useRef(null);
    const moonTexture = useTexture('/models/moon/moon.jpg');
    const normalTexture = useTexture('/models/moon/normal.jpg')

    const sphere = new THREE.SphereGeometry(10,32,32)
    const moon = new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      })

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    mesh.onAfterRender = () => {
      if (setReady) setReady(true);          // ✅ first pixels confirmed
      delete mesh.onAfterRender; // fire only once
    };

    return () => {
      /* Clean up if the Moon unmounts */
      if (mesh) delete mesh.onAfterRender;
    };
  }, []);


  return (
    <group ref={ref} {...props} dispose={null}>
        <mesh
            ref={meshRef}
            geometry={sphere}
            material={moon}
        />
    </group>
  )
})

export default Moon
import { useRef, useMemo, useEffect, useState } from "react";
import gsap from 'gsap'
import * as THREE from 'three'
import { useThree } from "@react-three/fiber";

import { ScrollTrigger } from "gsap/ScrollTrigger";

function domCenterToWorld(domRect, camera, size) {
  const xPx = 50 + domRect.width /2
  const yPx = 80 + domRect.height / 2;

  const ndc = new THREE.Vector3(
    (xPx / size.width) * 2 - 1,
    -(yPx / size.height) * 2 + 1,
    0.9 // mid‑depth between near & far
  );
  ndc.unproject(camera);
  return ndc;
}

/* ------------------------------------------------------------------
 *  Explosion points that spawn at the center of #text-la-head
 * ---------------------------------------------------------------- */
function Explosion() {
  const mesh = useRef();
  const group = useRef();
  const { camera, size } = useThree();

  const PARTICLES = 200;
  const endVectorLength = 8;

  /* ----------------------- Compute base buffers ------------------- */
  const { positions, directions, count } = useMemo(() => {
    const pos = new Float32Array(PARTICLES * 3);
    const dir = new Float32Array(PARTICLES * 3);
    // initially at origin; we'll translate the entire group later
    for (let i = 0; i < PARTICLES; i++) {
      const i3 = i * 3;
      pos[i3] = pos[i3 + 1] = pos[i3 + 2] = 0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      dir[i3] = Math.sin(phi) * Math.cos(theta);
      dir[i3 + 1] = Math.sin(phi) * Math.sin(theta);
      dir[i3 + 2] = Math.cos(phi);
    }
    return { positions: pos, directions: dir, count: PARTICLES };
  }, []);

  /* ----------------------- Align to DOM element ------------------- */
  const [origin, setOrigin] = useState(new THREE.Vector3());

  useEffect(() => {
    const dom = document.querySelector("#text-la-head");
    if (!dom) return;
    const updateOrigin = () => {
      const rect = dom.getBoundingClientRect();
      setOrigin(domCenterToWorld(rect, camera, size));
    };
    updateOrigin();
    window.addEventListener("resize", updateOrigin);
    ScrollTrigger.addEventListener("refresh", updateOrigin);

    return () => {
      window.removeEventListener("resize", updateOrigin);
      ScrollTrigger.removeEventListener("refresh", updateOrigin);
    };
  }, [camera, size]);


  /* --------------------------------------------------------------
   *  GSAP Scroll‑linked tween: recompute positions each tick
        useEffect hook for more control
   * ------------------------------------------------------------ */
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#new-hero",
        start: "50% top",
        // end:"80% top",
        // scrub: true,
        toggleActions: 'restart none none none'
      },
    });

    tl.to({}, {
      duration: 1, // dummy tween for progress
      onUpdate() {
        const p = this.progress();
        for (let i = 0; i < directions.length; i++) {
          positions[i] = directions[i] * endVectorLength * p;
        }
        mesh.current.visible = true;
        mesh.current.geometry.attributes.position.needsUpdate = true;
        mesh.current.material.opacity = 1 - p;
      },
      ease: "power1.out",
    });

    return () => tl.kill();
  }, [directions, positions]);

  return (
    <group ref={group} position={origin.toArray()}>
        <points ref={mesh} visible={false}>
            <bufferGeometry>
                <bufferAttribute
                attach="attributes-position"
                count={count}
                array={positions}
                itemSize={3}
                usage={THREE.DynamicDrawUsage}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#ffffff"
                size={0.05}
                transparent
                opacity={0.9}
                depthWrite={false}
            />
        </points>
    </group>
  );
};

export default Explosion;
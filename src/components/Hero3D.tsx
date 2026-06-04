import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Wireframe() {
  const groupRef = useRef<THREE.Group>(null);
  const mesh1 = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);
  const mesh3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
    }
    if (mesh1.current) {
      mesh1.current.rotation.x = t * 0.3;
      mesh1.current.rotation.z = t * 0.2;
    }
    if (mesh2.current) {
      mesh2.current.rotation.y = -t * 0.4;
      mesh2.current.rotation.x = t * 0.2;
    }
    if (mesh3.current) {
      mesh3.current.rotation.z = t * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={mesh1}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.85} />
      </mesh>
      <mesh ref={mesh2} scale={1.45}>
        <icosahedronGeometry args={[2.2, 0]} />
        <meshBasicMaterial color="#888888" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh ref={mesh3} scale={0.65}>
        <octahedronGeometry args={[2, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#cccccc" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Wireframe />
      <Particles />
    </Canvas>
  );
}

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Test = () => {
  return (
    <>
    
      <Canvas id="canvas">
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} autoRotate={true}/>
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#d03be6"
              attach="material"
              distort={0.5}
              speed={3}
            />
          </Sphere>
        </Suspense>
      </Canvas>
    </>
  );
};


export default Test;
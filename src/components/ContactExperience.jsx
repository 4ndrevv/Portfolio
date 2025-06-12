import { Text3D } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { ContactBoy } from './ContactBoy'

export const ContactExperience = () => {
  return (
    <Canvas camera={{
        position: [0, 0, 5],
    }}>
        <ambientLight intensity={2} />
        <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1c34ff"}/>

        <group>
            <Text3D 
            position={[-55, 5, -150]} 
            rotation={[0, -0.4, 0]}
            curveSegments={32}
            bevelSize={0.04}
            bevelThickness={0.1} 
            height={0.5}
            lineHeight={0.5}
            letterSpacing={-0.06}
            size={20.0}
            bevelEnabled
            font={"/fonts/Inter_Bold.json"}>
                {`Bonjour\nC'est moi\nNam`}
                <meshNormalMaterial />
            </Text3D>
            
            <ContactBoy scale={2.6} position={[1.5, -2.3, -1]} />
            
            
        </group>
    </Canvas>

  )
}

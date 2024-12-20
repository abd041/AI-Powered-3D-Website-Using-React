import React from 'react'
// import { easing } from "maath"
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from '../store/index'


const Shirt = () => {
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF("/shirt_baked.glb")
  console.log(nodes , materials)
  const logotexture = useTexture(snap.islocalDecal)
  const fulltexture = useTexture(snap.isfulldecol)
  return (
    <group>
      <mesh
      castShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      dispose={null}
      >

      </mesh>
    </group>
  )
}

export default Shirt
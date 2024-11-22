import { useFrame } from "@react-three/fiber"
import {easing} from "maath"
import { useSnapshot } from "valtio"
import state from "../store"
import React, { useRef } from "react"


const CameraRig = ({children}) => {
  const group = useRef(null)
  return (
    <group ref={group}>{children}</group>
  )
}

export default CameraRig
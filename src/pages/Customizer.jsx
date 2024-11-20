import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import config from "../config/config"
import state from "../store/index"
import { download } from "../assets/download.png"
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from "../config/motion"
import AIpicker from '../components/AIpicker'
import ColorPicker from '../components/ColorPicker'
import FilePicker from '../components/FilePicker'
import Tab from '../components/Tab'

const Customizer = () => {
  return (
    <div>Customizer</div>
  )
}

export default Customizer
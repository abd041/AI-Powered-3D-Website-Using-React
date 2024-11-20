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
import Custombtn from "../components/Custombtn"

const Customizer = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {!snap.intro && <>
        <motion.div {...slideAnimation("left")} className='absolute top-0 left-0 z-10'>
          <div className='flex items-center min-h-screen'>
            <div className='editorstabs-container tabs'>
              {EditorTabs.map((tab) => (
                <Tab
                  key={tab.name}
                  tab={tab}
                  handleClick={() => { }}
                />
              ))}

            </div>
          </div>

        </motion.div>
        <motion.div className='absolute right-4 top-4 z-10' {...fadeAnimation}>
          <Custombtn
            type="filled"
            title="Go back"
            handleClick={() => state.intro = true}
            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
          />
        </motion.div>
        <motion.div className='filtertabs-container' {...slideAnimation("up")}>
          {FilterTabs.map((tab) => (
            <Tab
              isFilterTab=""
              isActiveTab=""
              key={tab.name}
              tab={tab}
              handleClick={() => { }}
            />
          ))}
        </motion.div>
      </>}
    </AnimatePresence>

  )
}

export default Customizer
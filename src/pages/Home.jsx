import { motion, AnimatePresence } from "framer-motion"
import { useSnapshot } from "valtio"
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "../config/motion"
import state from "../store"

const Home = () => {

    const snap = useSnapshot(state)
    console.log(snap)
    return (
        <AnimatePresence>
            {snap.intro &&
                <motion.section className="home" {...slideAnimation("left")}>
                    <motion.header {...slideAnimation("down")}>
                        <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain" />
                    </motion.header>
                    <motion.div {...headContainerAnimation}>
                        <motion.div className="head-text" {...headContentAnimation}>
                            <h1>Let's <br className="xl:block hidden" />Do it</h1>
                        </motion.div>
                        <motion.div></motion.div>
                    </motion.div>
                </motion.section>
            }
        </AnimatePresence>
    )
}

export default Home
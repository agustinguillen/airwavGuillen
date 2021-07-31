import { motion } from 'framer-motion';
import About from '../../components/About/About'

function AboutPage() {
    return (
        <motion.div 
            exit={{opacity: 0}} 
            animate={{opacity: 1}} 
            initial={{opacity:0}}
        >
            <About />
        </motion.div>
    )
}

export default AboutPage;
import { motion } from 'framer-motion';
import Contact from '../../components/Contact/Contact';

function ContactPage() {
    return (
        <motion.div 
            exit={{opacity: 0}} 
            animate={{opacity: 1}} 
            initial={{opacity:0}}
        >
            <Contact />
        </motion.div>
    )
}

export default ContactPage;
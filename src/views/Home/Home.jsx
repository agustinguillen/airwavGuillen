import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div 
            exit={{opacity: 0}} 
            animate={{opacity: 1}} 
            initial={{opacity:0}}
        >
            <ItemListContainer />
        </motion.div>
    )
}

export default Home;
import Cart from './../../components/Cart/Cart';
import { motion } from 'framer-motion';

function CartView() {
    return (
        <motion.div 
            exit={{opacity: 0}} 
            animate={{opacity: 1}} 
            initial={{opacity:0}}
        >
            <Cart />
        </motion.div>
    )
}

export default CartView;
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';

function ProductDetail() {
    const { id } = useParams();
    return (
        <motion.div 
            exit={{opacity: 0}} 
            animate={{opacity: 1}} 
            initial={{opacity:0}}
        >
            <h1>
                <ItemDetailContainer id={id}/>
            </h1>
        </motion.div>
    )
}

export default ProductDetail;
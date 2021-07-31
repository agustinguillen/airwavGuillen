import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';

function ProductCategory() {
    const { catId } = useParams();
    
    return (
        <motion.div 
            exit={{opacity: 0}} 
            animate={{opacity: 1}} 
            initial={{opacity:0}}
        >
            <ItemListContainer catId={catId} />
        </motion.div>
    )
}

export default ProductCategory;
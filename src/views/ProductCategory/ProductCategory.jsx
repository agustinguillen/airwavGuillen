import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router';

function ProductCategory() {
    const { catId } = useParams();
    
    return (
        <>
            <ItemListContainer catId={catId} />
        </>
    )
}

export default ProductCategory;
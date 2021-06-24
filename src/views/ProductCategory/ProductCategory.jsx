import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router';

function ProductCategory() {
    const { catId } = useParams();
    console.log(catId)
    return (
        <>
            <ItemListContainer catId={catId}/>
        </>
    )
}

export default ProductCategory;
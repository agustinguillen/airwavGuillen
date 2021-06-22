import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router';

function ProductDetail() {
    const { id } = useParams();
    return (
        <>
            <h1>
                <ItemDetailContainer id={id}/>
            </h1>
        </>
    )
}

export default ProductDetail;
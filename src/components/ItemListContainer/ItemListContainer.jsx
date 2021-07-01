import './ItemListContainer.scss';
import ItemList from './../ItemList/ItemList';

const ItemListContainer = ({catId}) => {
    return (
        <>
            <div className="itemlist-container text-center mt-3">
                <h3>Productos</h3>
                <ItemList catId={catId} />
            </div>
        </>
    )
}

export default ItemListContainer;
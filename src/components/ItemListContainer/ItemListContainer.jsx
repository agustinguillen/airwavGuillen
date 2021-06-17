import './ItemListContainer.scss';
import ItemList from './../ItemList/ItemList';

const ItemListContainer = () => {
    return (
        <>
            <div className="itemlist-container text-center">
                <h3>Productos</h3>
                <ItemList />
            </div>
        </>
    )
}

export default ItemListContainer;
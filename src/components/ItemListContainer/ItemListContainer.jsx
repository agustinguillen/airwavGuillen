import './ItemListContainer.scss';
import ItemCount from './../ItemCount/ItemCount'


function ItemListContainer() {
    return (
        <div className="itemlist-container text-center">
            <h3>ItemListCointainer</h3>
            <ItemCount />
        </div>
    )
}

export default ItemListContainer;
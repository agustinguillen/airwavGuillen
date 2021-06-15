import './ItemListContainer.scss';
import Item from './../Item/Item'


function ItemListContainer() {
    return (
        <>
            <div className="itemlist-container text-center">
                <h3>ItemListCointainer</h3>
                <Item />
            </div>
        </>
    )
}

export default ItemListContainer;
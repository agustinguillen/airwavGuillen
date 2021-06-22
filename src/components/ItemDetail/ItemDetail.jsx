import './ItemDetail.scss';

const ItemDetail = ({item}) => {
    

    return (
        <>
            <div className="text-center">
                <h3>Detalle de Producto</h3>
                <div className="itemDetail d-flex">
                    <div className="col-lg-6">
                        <img src={item?.image} alt="Imagen del producto" className="itemImage"/>
                    </div>
                    <div className="col-lg-6 text-center itemInfo">
                        <h4>{item?.name}</h4>
                        <p>${item?.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;
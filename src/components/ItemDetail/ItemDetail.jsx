import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import Loading from '../Loading/Loading';
import { Button } from 'react-bootstrap';

const ItemDetail = ({item}) => {
    
    const onAdd = (amount) =>{
        console.log(`Agregar al carrito ${amount}`);
    }
       
    return (
        <>
            {
            (item.id !== undefined) ?
            (<div className="text-center">
                <h3>Detalle de Producto</h3>
                <div className="itemDetail d-flex">
                    <div className="col-lg-5">
                        <img src={item?.image} alt="Imagen del producto" className="itemImage"/>
                    </div>
                    <div className="col-lg-7 text-center itemInfo">
                        <h4>{item?.name}</h4>
                        <p className="price">${item?.price}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Praesent in felis vehicula, tincidunt lectus ac, rutrum sapien. 
                            Quisque varius sit amet sapien vitae egestas. 
                            Nam id magna eu metus finibus finibus et sit amet magna. 
                            Mauris nibh nunc, egestas vitae vehicula vel, sollicitudin nec tellus. 
                        </p>
                        <ItemCount stock={item?.stock} initial='1' onAdd={onAdd}/>
                        <Button variant="dark" className="mx-2">Comprar ahora</Button>
                    </div>
                </div>
            </div>)
            : <Loading />
            }
        </>
    )
}

export default ItemDetail;
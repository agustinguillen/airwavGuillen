import './Item.scss';
import ItemCount from './../ItemCount/ItemCount';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Item = ({id, productName, price, image, stock}) => {
        const onAdd = (amount) =>{
            console.log(`Agregar al carrito ${amount}`);
        }

        const cardImage = {
            objectFit: 'cover',
            width: '14rem',
            height: '14rem',
            padding: '2rem'
        }
        
        return (
            <>
                <Card style={{ width: '18rem', margin: '2rem' }}>
                    <Link to={`/detail/${id}`}>
                        <Card.Img variant="top" src={image} style={cardImage}/>
                    </Link>
                        <Card.Body>
                            <Link to={`/detail/${id}`}>
                                <Card.Title>{productName}</Card.Title>
                            </Link>
                            <Card.Text>Precio: ${price}</Card.Text>
                            <Card.Text>Stock: {stock}</Card.Text>
                            <Card.Text>Cantidad:</Card.Text>
                        </Card.Body>
                    <ItemCount stock={stock} initial='1' onAdd={onAdd}/>
                </Card>
            </>
        )
}

export default Item;
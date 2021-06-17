import './Item.scss';
import ItemCount from './../ItemCount/ItemCount';
import { Card } from 'react-bootstrap';

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
                        <Card.Img variant="top" src={image} style={cardImage}/>
                    <Card.Body>
                        <Card.Title>{productName}</Card.Title>
                        <Card.Text>Precio: ${price}</Card.Text>
                        <Card.Text>Stock: {stock}</Card.Text>
                        <Card.Text>Cantidad:</Card.Text>
                        <ItemCount stock={stock} initial='1' onAdd={onAdd}/>
                    </Card.Body>
                </Card>
            </>
        )
}

export default Item;
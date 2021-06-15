import './Item.scss';
import ItemCount from './../ItemCount/ItemCount';
import { Card } from 'react-bootstrap';
import product from './../../assets/img/fenderstrato.jpg';

function Item (){
        const onAdd = (amount) =>{
            console.log(`Agregar al carrito ${amount}`);
        }
        return (
            <>
                <Card style={{ width: '18rem', margin: '2rem' }}>
                    <Card.Img variant="top" src={product} style={{ height: '50%', width: '50%' }} />
                    <Card.Body>
                        <Card.Title>Producto</Card.Title>
                        <Card.Text>Precio: $19.999</Card.Text>
                        <Card.Text>Cantidad:</Card.Text>
                        <ItemCount stock='5' initial='1' onAdd={onAdd}/>
                    </Card.Body>
                </Card>
            </>
        )
}

export default Item;
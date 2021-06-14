import './ItemCount.scss';
import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import product from './../../assets/img/fenderstrato.jpg';

class ItemCount extends Component {
    constructor(){
        super();

        this.state = {
            count: 0
        }
    }

    handleCounterUp = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleCounterDown = () =>{
        this.setState({ count: this.state.count - 1 })
    }

    render(){
        return (
            <Card style={{ width: '18rem', margin: '2rem' }}>
                <Card.Img variant="top" src={product} style={{ height: 'auto' }} />
                <Card.Body>
                    <Card.Title>Producto</Card.Title>
                    <Card.Text>Precio: $19.999</Card.Text>
                    <div className="d-flex justify-content-center">
                        <Button onClick={this.handleCounterDown} variant="outline-danger" className="mx-2">-</Button>
                        <Card.Text>
                        Cantidad : {this.state.count}
                        </Card.Text>
                        <Button onClick={this.handleCounterUp} variant="outline-primary" className="mx-2">+</Button>
                    </div>
                    <Button variant="warning" className="mx-2 mt-2">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ItemCount;
import { Button, Form, Modal } from "react-bootstrap";
import {db} from './../../Firebase';
import { useState, useContext } from "react";
import CartContext from './../../context/cart/CartContext';
import firebase from 'firebase/app';


const CartForm = ({products, totalPrice}) => {
    const {clear} = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);
    const [orderKey, setOrderKey] = useState('');

    const initialState = {
		firstName: '',
		lastName: '',
		phone: '',
        email: '',
        products: products,
        totalPrice: totalPrice
	}

    const saveOrder = (e) =>{
        e.preventDefault()

        const formElements = e.target.elements

        let newOrder = initialState
        newOrder.firstName = formElements[0].value
        newOrder.lastName = formElements[1].value
        newOrder.phone = formElements[2].value
        newOrder.email = formElements[3].value
        storeOrder(newOrder)
    }

    const storeOrder = async (order) =>{
        let doc = await db.collection('orders').doc()
        doc.set({...order, created: firebase.firestore.Timestamp.fromDate(new Date())})
        .then(()=>{
            setOrderKey(doc.id)
            setShowModal(true)
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    const finishPurchase = () =>{
        clear()
        setShowModal(false)
    }

    return (
        <>
            <Form onSubmit={saveOrder} className="d-flex flex-column justify-content-start">
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="clientFirstName" placeholder="Ingresa aquí tu nombre" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" name="clientLastName" placeholder="Ingresa aquí tu apellido" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Número de teléfono</Form.Label>
                    <Form.Control type="text" name="clientPhone" placeholder="Ingresa tu número de teléfono" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Dirección de Email</Form.Label>
                    <Form.Control type="email" name="clientEmail" placeholder="Dirección de Email" />
                    <Form.Text className="text-muted">
                        Nunca compartiremos tu mail con nadie más
                    </Form.Text>
                </Form.Group>
                <Button variant="warning" type="submit" className="align-center">
                    <strong>Comprar</strong>
                </Button>
            </Form>
            {
                showModal && 
                        <Modal.Dialog backdrop="static" style={{position: 'absolute', top: '0', left: '-100%'}}>
                            <Modal.Header onClick={()=>finishPurchase()} closeButton>
                                <Modal.Title>Gracias por tu compra!</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>El código de tu orden de compra es el siguiente: <strong>{orderKey}</strong></p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="warning" onClick={()=>finishPurchase()}>Listo!</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
            }
        </>
    )
}

export default CartForm
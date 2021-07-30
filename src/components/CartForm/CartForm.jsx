import { Button, Form, Modal, Alert } from "react-bootstrap"
import {db} from './../../Firebase'
import { useState, useContext } from "react"
import CartContext from './../../context/cart/CartContext'
import firebase from 'firebase/app'


const CartForm = ({products, totalPrice}) => {
    const {clear} = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [orderKey, setOrderKey] = useState('')
    const [error, setError] = useState(false)
    let user = JSON.parse(localStorage.getItem("session")) || null
    let userId;
    if(user){
        userId = user.id
    }
    const initialState = {
		firstName: '',
		lastName: '',
		phone: '',
        email: '',
        products: products,
        totalPrice: totalPrice,
        user: userId
	}

    const saveOrder = (e) =>{
        e.preventDefault()

        const formElements = e.target.elements

        let newOrder = initialState
        newOrder.firstName = formElements[0].value
        newOrder.lastName = formElements[1].value
        newOrder.phone = formElements[2].value
        newOrder.email = formElements[3].value
        
        let validEmail = newOrder.email !== '' && new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(newOrder.email);
        let validPhone = newOrder.phone !== '' && new RegExp(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g).test(newOrder.phone);
        let validFirstName = newOrder.name !== '' && new RegExp(/^.+$/g).test(newOrder.name)
        let validLastName = newOrder.name !== '' && new RegExp(/^.+$/g).test(newOrder.lastName)

        if(validEmail && validPhone && validFirstName && validLastName){
            storeOrder(newOrder)
        }else{
            setError(true)
        }
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

        db.collection("products").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                let product = products.find(product => product.item.id === doc.id)
                if(product !== null && product !== undefined){
                    doc.ref.update({
                        stock: firebase.firestore.FieldValue.increment(-Number(product.quantity))
                    });
                }
            });
        });

        clear()
        setShowModal(false)
    }

    return (
        <>
            { error && <Alert variant="danger" onClose={() => setError(false)} dismissible>Revisa que tus datos ingresados sean válidos!</Alert>}
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
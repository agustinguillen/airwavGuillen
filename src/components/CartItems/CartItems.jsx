import { useContext } from 'react';
import CartContext from './../../context/cart/CartContext';
import { Card, Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

const CartItems = () =>{

    const {cartItems, removeItem} = useContext(CartContext);

    const remove = (item, quantity) =>{
        removeItem(item, quantity)
    }

    return(
        <>
            {
                cartItems.map(
                    cartItem =><Card key={cartItem.item.id} style={{borderRadius: '25px', marginBottom: '2px'}}>
                            <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <Card.Img src={cartItem.item.image} 
                                                  style={{width: '7rem', 
                                                  height: '7rem', 
                                                  marginRight: '30px',
                                                  borderRadius: '25px'
                                                }}
                                        />
                                        <div className="d-flex">
                                            <div>
                                                <Card.Title>{cartItem.item.name}</Card.Title>
                                                <Card.Text>lksajfklasjflkasjflksafjlaksfjslakf</Card.Text>
                                                <Card.Text style={{fontWeight: '800', fontSize: 'large'}}>
                                                        ${cartItem.item.price}
                                                        <span style={{
                                                            marginLeft: '10px',
                                                            color: 'grey'
                                                        }}>
                                                            x{cartItem.quantity}
                                                        </span>
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{margin: '0.5rem 1rem'}}>
                                            <Button variant="outline-danger" 
                                                    className="btn-sm"
                                                    onClick={()=>remove(cartItem.item, cartItem.quantity)}
                                            >
                                                <FaTimes style={{margin: '0.4rem 0'}}/>Eliminar
                                            </Button>
                                    </div>
                            </div>
                        </Card>
                )}
        </>
    )

}

export default CartItems;
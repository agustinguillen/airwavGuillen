import './Cart.scss';
import { useContext } from 'react';
import CartContext from './../../context/cart/CartContext';
import CartItems from '../CartItems/CartItems';
import { Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Cart = () =>{
    const {totalPrice, totalItems, clear} = useContext(CartContext);

    const clearCart = () =>{
        clear()
    }

    return(
        <>
            <div className="cart-container mt-3">
                <h3 className="text-center">Carrito de Compras</h3>
                <div className="d-flex mt-5">
                    <div className="col-lg-8 d-flex flex-column justify-content-center" style={{padding: '0 5rem'}}>
                    {
                        totalItems > 0 ?
                        <>
                            <CartItems />
                            <div className="d-flex justify-content-center mt-2">
                                <div>
                                    
                                        <Button variant="warning"
                                                className="btn-sm align-center"
                                                onClick={()=>clearCart()}
                                                >
                                                <FaTrash style={{margin: '0.5rem'}}/>
                                                <strong>Vaciar Carrito</strong>
                                        </Button>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <p style={{fontWeight: '800', fontSize: 'x-large'}}>
                                Tu carrito está vacío! <br></br>Buscá lo que quieras en nuestros 
                                <Link to="/" style={{textDecoration: 'none'}}> productos</Link>
                            </p>
                        </>
                    }
                    </div>
                    {
                        totalItems > 0 &&
                        <div className="col-lg-4">
                            <p style={{fontWeight: '800', fontSize: 'x-large'}}>
                                Precio Total: ${totalPrice}
                            </p>
                        </div>
                    }   
                </div>
            </div>
        </>
    )
}

export default Cart;
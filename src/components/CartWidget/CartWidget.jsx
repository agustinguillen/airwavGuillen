import './CartWidget.scss';
import { Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';

const CartWidget = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <>
            <Button variant="warning" className="cart-btn d-flex flex-column justify-content-center">
                { cartItems.length > 0 && 
                <div className="items-count d-flex justify-content-center">
                    <span>{cartItems.length}</span>
                </div> 
                }
                <FaShoppingCart className="cart-icon"/>
            </Button>
        </>
    )
}

export default CartWidget;
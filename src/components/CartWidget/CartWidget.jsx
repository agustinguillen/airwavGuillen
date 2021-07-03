import './CartWidget.scss';
import { Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';

const CartWidget = () => {
    const { cartItems, totalItems } = useContext(CartContext);

    return (
        <>
            <Button variant="warning" className="cart-btn d-flex justify-content-center">
                <FaShoppingCart className="cart-icon"/>
                { cartItems.length > 0 && 
                <div className="items-count d-flex justify-content-center">
                    <span>{totalItems}</span>
                </div> 
                }
            </Button>
        </>
    )
}

export default CartWidget;
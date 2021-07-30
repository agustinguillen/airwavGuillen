import './CartWidget.scss';
import { Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext, useState } from 'react';
import CartContext from '../../context/cart/CartContext';
import CartPreview from '../CartPreview/CartPreview';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);
    const [hover, setHover] = useState(false)

    return (
        <> 
            <div onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                <Link to="/cart" style={{textDecoration: 'none'}}>
                    <Button variant="warning" 
                            className="cart-btn d-flex justify-content-center">
                        <FaShoppingCart className="cart-icon"/>
                        { totalItems > 0 && 
                        <div className="items-count d-flex justify-content-center">
                            <span>{totalItems}</span>
                        </div> 
                        }
                    </Button>
                </Link>
                {hover && totalItems>0 && (<CartPreview onMouseOver={()=>setHover(true)} />)}
            </div>
        </>
    )
}

export default CartWidget;
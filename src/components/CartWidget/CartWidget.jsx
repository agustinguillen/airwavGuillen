import './CartWidget.scss';
import { Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget(){
    return (
        <>
            <Button variant="warning" className="btn-cartWidget"><FaShoppingCart /></Button>
        </>
    )
}

export default CartWidget;
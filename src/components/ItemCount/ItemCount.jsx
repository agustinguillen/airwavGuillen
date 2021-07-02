import './ItemCount.scss';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from './../../context/cart/CartContext'

const Item = ({item, stock, initial, onAdd}) => {
    const { addToCart } = useContext(CartContext);
    const [amount, setAmount] = useState(Number(initial));

    const add = () =>{
        onAdd(amount)
        addToCart(item, amount)
    }

    return (
        <>
            <div className="container-amount">
                <Button className="btn-amount" variant="outline-warning" onClick={()=>setAmount(amount-1)} disabled={amount === 1}><FaMinus /></Button>
                <p className="count-amount">{amount}</p>
                <Button className="btn-amount" variant="outline-warning" onClick={()=>setAmount(amount+1)} disabled={amount === Number(stock)}><FaPlus /></Button> 
            </div>
            <Button className="btn-add-to-cart" variant="warning" onClick={()=>add()}>Agregar al carrito</Button>
        </>
    )
}

export default Item;
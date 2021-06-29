import './ItemCount.scss';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Item = ({stock, initial, onAdd}) => {
        const [amount, setAmount] = useState(Number(initial));

        return (
            <>
                <div className="container-amount">
                    <Button className="btn-amount" variant="outline-warning" onClick={()=>setAmount(amount-1)} disabled={amount === 1}><FaMinus /></Button>
                    <p className="count-amount">{amount}</p>
                    <Button className="btn-amount" variant="outline-warning" onClick={()=>setAmount(amount+1)} disabled={amount === Number(stock)}><FaPlus /></Button> 
                </div>
                <Button className="btn-add-to-cart" variant="warning" onClick={()=>onAdd(amount)}>Agregar al carrito</Button>
            </>
        )
}

export default Item;
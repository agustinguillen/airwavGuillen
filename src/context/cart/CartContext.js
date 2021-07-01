import { createContext, useState} from 'react';

export const CartContext = createContext ();

export const CartProvider = ({defaultValue=[], children}) =>{

    const [cart, setCart] = useState(defaultValue);

    const addItem = (item) =>{
        console.log(item);
        setCart(cart => [...cart, item])
        console.log(cart)
    }

    function removeItem(item){
        
    }

    function clear(){
        setCart(defaultValue);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}




import { createContext, useState} from "react";

export const CartContext = createContext ();

export const CartProvider = ({defaultValue=[], children}) =>{

    const [cart, setCart] = useState(defaultValue);

    function addItem(item){
        console.log(item);
        setCart(state => [...state, item])
        console.log(cart)
    }

    function removeItem(item){

    }

    function clear(){
        //setCart([]);
    }

    return (
        <CartContext.Provider value={{addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}




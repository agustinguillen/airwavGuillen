import { useReducer } from "react";
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { ADD_TO_CART, REMOVE_ITEM, LOAD_CART, CLEAR_CART } from './../Types';

const CartState = ({children}) =>{

    const initialState = {
        cartItems: JSON.parse(localStorage.getItem('cart')) || [],
        totalItems: JSON.parse(localStorage.getItem('totalItems')) || 0,
        totalPrice: 0
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (item, quantity) =>{
        let itemAndQuantity = {
                item: item,
                quantity: quantity           
            }
        dispatch({type: ADD_TO_CART, payload: itemAndQuantity})
    }

    const removeItem = (item, quantity) =>{
        let itemAndQuantity = {
            id: item.id,
            item: item,
            quantity: quantity           
        }
        dispatch({type: REMOVE_ITEM, payload: itemAndQuantity})
    }

    const loadCart = (cartItems, totalItems) =>{
        let itemsAndTotal = {
            cartItems,
            totalItems
        }
        dispatch({type: LOAD_CART, payload: itemsAndTotal})
    }

    const clear = () =>{
        dispatch({type: CLEAR_CART})
    }

    return (
        <CartContext.Provider value={{
            cartItems: state.cartItems,
            totalItems: state.totalItems,
            totalPrice: state.totalPrice,
            addToCart,
            removeItem,
            loadCart,
            clear
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState;
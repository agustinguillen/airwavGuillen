import { useReducer } from "react";
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from './../Types';

const CartState = ({children}) =>{

    const initialState = {
        showCart: false,
        cartItems: [],
        totalItems: 0,
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
    
    const showHideCart = () =>{
        dispatch({type: SHOW_HIDE_CART})
    }

    const removeItem = (id) =>{
        dispatch({type: REMOVE_ITEM, payload: id})
    }

    return (
        <CartContext.Provider value={{
            showCart: state.showCart,
            cartItems: state.cartItems,
            totalItems: state.totalItems,
            totalPrice: state.totalPrice,
            addToCart,
            showHideCart,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState;
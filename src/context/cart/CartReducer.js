import { ADD_TO_CART, REMOVE_ITEM } from './../Types';

const CartReducer = (state, action) =>{
    switch(action.type){
        case ADD_TO_CART: {
            const {item, quantity} = action.payload;
            const nextCart = [...state.cartItems];
            const existingIndex = nextCart.findIndex((e) => e.item.id === item.id);

            if (existingIndex >= 0) {
                const newQuantity = parseInt(nextCart[existingIndex].quantity + quantity);
        
                nextCart[existingIndex] = {
                  ...action.payload,
                  quantity: newQuantity,
                };
            } else {
                nextCart.push(action.payload);
            }

            return {
                    ...state,
                    cartItems: nextCart,
                    totalItems: state.totalItems + quantity,
                    totalPrice: state.totalPrice + (item.price*quantity)
                }          
         }
        case REMOVE_ITEM: {
            const {id, item, quantity} = action.payload;
            return {
                    ...state,
                    cartItems: state.cartItems.filter(e => e.item.id !== id),
                    totalItems: state.totalItems - quantity,
                    totalPrice: state.totalPrice - (item.price*quantity)
                }     
        }  
        default:
            return state
    }
}

export default CartReducer;
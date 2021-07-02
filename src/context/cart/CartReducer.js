import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from './../Types';

const CartReducer = (state, action) =>{
    switch(action.type){
        case SHOW_HIDE_CART: {
           return {
               ...state,
                showCart: !state.SHOW_HIDE_CART
           }          
        }
        case ADD_TO_CART: {
            let totalItems;
            let totalPrice;
            let item = action.payload.item;
            let checkCartItems = state.cartItems.find(product => product.item.id === item.id);

            if(state.cartItems.length){
                let quantities = state.cartItems.reduce(product => product.quantity += product.quantity);
                totalItems = quantities + action.payload.quantity;
                totalPrice = state.totalPrice + (action.payload.item.price*action.payload.quantity);
            }
            if(checkCartItems === undefined){
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                    totalItems: totalItems,
                    totalPrice: totalPrice
                }          
            }else{
                let index = state.cartItems.findIndex(product => product.item.id === item.id);
                let newState = {...state}
                console.log(action.payload.quantity)
                newState.cartItems[index].quantity += action.payload.quantity
                return newState;
            }
         }
        case REMOVE_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }          
        }  
        default:
            return state
    }
}

export default CartReducer;
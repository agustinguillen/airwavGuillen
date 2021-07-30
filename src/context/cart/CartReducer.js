import { ADD_TO_CART, REMOVE_ITEM, LOAD_CART, CLEAR_CART } from "./../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { item, quantity } = action.payload;
      const nextCart = JSON.parse(localStorage.getItem('nextCart')) || [...state.cartItems];
      const existingIndex = nextCart.findIndex((e) => e.item.id === item.id);
      if (existingIndex >= 0) {
        const newQuantity = parseInt(
          nextCart[existingIndex].quantity + quantity
        );

        nextCart[existingIndex] = {
          ...action.payload,
          quantity: newQuantity,
        };
      } else {
        nextCart.push(action.payload);
      }

      localStorage.setItem('nextCart', JSON.stringify(nextCart))
      localStorage.setItem('totalItems', state.totalItems + quantity)
      localStorage.setItem('totalPrice', state.totalPrice + item.price * quantity)

      console.log(nextCart)
      console.log(quantity)

      return {
        ...state,
        cartItems: nextCart,
        totalItems: state.totalItems + quantity,
        totalPrice: state.totalPrice + item.price * quantity
      };
    }
    case REMOVE_ITEM: {
      const { id, item, quantity } = action.payload;
      let items = state.cartItems.filter((e) => e.item.id !== id)
      localStorage.setItem('cart', JSON.stringify(items))
      localStorage.setItem('nextCart', JSON.stringify(items))
      localStorage.setItem('totalItems', state.totalItems - quantity)
      localStorage.setItem('totalPrice', state.totalPrice - item.price * quantity)
      return {
        ...state,
        cartItems: items,
        totalItems: state.totalItems - quantity,
        totalPrice: state.totalPrice - item.price * quantity,
      };
    }
    case LOAD_CART: {
      const { cartItems, totalItems } = action.payload;
      let prices = []; 
      let total = 0;
      let items = cartItems
      for(const e of items){
        prices.push(e.item.price * e.quantity)
      }
      for(const price of prices){
        total += price 
      }
      
      return {
        ...state,
        cartItems: items,
        totalItems: totalItems,
        totalPrice: total
      };
    }
    case CLEAR_CART: {
      localStorage.setItem('cart', JSON.stringify([]))
      localStorage.setItem('nextCart', JSON.stringify([]))
      localStorage.setItem('totalItems', 0)
      localStorage.setItem('totalPrice', 0)
      return {
        ...state,
        cartItems: [],
        totalItems: 0,
        totalPrice: 0,
      };
    }
    default:
      return state;
  }
};

export default CartReducer;

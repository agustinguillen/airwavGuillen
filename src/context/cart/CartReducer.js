import { ADD_TO_CART, REMOVE_ITEM, CLEAR_CART } from "./../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { item, quantity } = action.payload;
      const nextCart = JSON.parse(localStorage.getItem('cart')) || [...state.cartItems];
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

      localStorage.setItem('cart', JSON.stringify(nextCart))
      localStorage.setItem('totalItems', state.totalItems + quantity)

      return {
        ...state,
        cartItems: nextCart,
        totalItems: state.totalItems + quantity,
        totalPrice: state.totalPrice + item.price * quantity,
      };
    }
    case REMOVE_ITEM: {
      const { id, item, quantity } = action.payload;
      let items = state.cartItems.filter((e) => e.item.id !== id)
      localStorage.setItem('cart', JSON.stringify(items))
      localStorage.setItem('totalItems', state.totalItems - quantity)

      return {
        ...state,
        cartItems: items,
        totalItems: state.totalItems - quantity,
        totalPrice: state.totalPrice - item.price * quantity,
      };
    }
    case CLEAR_CART: {
      localStorage.setItem('cart', JSON.stringify([]))
      localStorage.setItem('totalItems', 0)
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

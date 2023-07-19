interface CartAction {
  type: "ADD" | "REMOVE";
  payload: MenuItem;
}

const cartReducer = (state: Cart, action: CartAction) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD": {
      let newCartItems: MenuItem[] = state.cartItems.map((item) => {
        return { ...item };
      });
      //! avoids impurity by using deep copy, remember elements inside needs to deep copy too if also an object so u can't let newCartItems: MenuItem[] = [...state.cartItems];
      const index = newCartItems.findIndex((item) => item.id === payload.id);
      if (index === -1) newCartItems.push(payload);
      else newCartItems[index].amount += payload.amount;

      return {
        cartItems: [...newCartItems],
        totalAmount: state.totalAmount + payload.price * payload.amount,
      };
    }
    case "REMOVE": {
      let newCartItems: MenuItem[] = state.cartItems.map((item) => {
        return { ...item };
      });
      newCartItems = newCartItems.filter((item) => {
        if (item.id === payload.id) {
          if (payload.amount === item.amount) return false;
          else item.amount -= payload.amount;
        }
        return true;
      });
      return {
        cartItems: [...newCartItems],
        totalAmount: state.totalAmount - payload.price * payload.amount,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;

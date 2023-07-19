import React, { FC, ReactNode, useReducer } from "react";
import cartReducer from "./cartReducer";
import CartContext from "./cartContext";

const initState: CartContextType = {
  cartItems: [] as MenuItem[],
  totalAmount: 0,
  addItem: (item: MenuItem) => {},
  removeItem: (item: MenuItem) => {},
};

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initState);

  const addItemToCartHandler = (item: MenuItem) => {
    dispatchCartAction({ type: "ADD", payload: { ...item } });
  };

  const removeItemFromCartHandler = (item: MenuItem) => {
    dispatchCartAction({ type: "REMOVE", payload: { ...item } });
  };

  const cartContext: CartContextType = {
    cartItems: cartState.cartItems,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

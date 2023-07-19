import { createContext } from "react";

const initState: CartContextType = {
  cartItems: [] as MenuItem[],
  totalAmount: 0,
  addItem: (item: MenuItem) => {},
  removeItem: (item: MenuItem) => {},
};

const CartContext = createContext<CartContextType>(initState);

export default CartContext;
